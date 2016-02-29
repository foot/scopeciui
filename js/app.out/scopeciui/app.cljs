(ns scopeciui.app
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :include-macros true]
            [clairvoyant.core :as trace :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! timeout]]
            [accountant.core :as accountant]))

(def CISERVER "http://ec2-52-28-176-87.eu-central-1.compute.amazonaws.com/ciui/")
;; (def CISERVER "http://localhost:6010/")

(defonce state (atom {}))


(defn load-revision [rev]
  (swap! state assoc :selected (:sha rev)))


;; -------------------------
;; Views

(defn commits-page []
  (let [selected (:selected @state)
        servers (get @state :servers {})
        selected-url (when selected (servers selected))]
    [:div.page
     [:ul.sidebar
      (for [c (:commits @state)]
        (let [available (servers (:sha c))
              selected (= selected (:sha c))
              on-click (fn [ev]
                         (.preventDefault ev)
                         (when available
                           (load-revision c)))]
          [:li {:class (str (when selected "selected ")
                            (when available "available"))
                :key (:sha c)}
           [:a {:href "#" :on-click on-click}
            (some-> c :commit :message)]]))]
     [:div.content
      [:iframe {:src selected-url}]]]))


(defn about-page []
  [:div [:h2 "About this project..."]
   [:div [:a {:href "/"} "go to the home page"]]])


(defn current-page []
  [:div [(:current-page @state)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (swap! state assoc :current-page #'commits-page))


(secretary/defroute "/about" []
  (swap! state assoc :current-page #'about-page))

;; -----
;; do it


(defn parse-servers [res]
  (->> res
       :data
       (map (juxt identity #(str CISERVER % "/")))
       (into {})))

(go-loop []
  (let [commits-res (<! (http/get (str CISERVER "commits.json") {:with-credentials? false}))
        servers-res (<! (http/get (str CISERVER "index.json") {:with-credentials? false}))]
    (->> commits-res :body (swap! state assoc :commits))   
    (->> servers-res :body parse-servers (swap! state assoc :servers)))
  (<! (timeout 10000))
  (recur))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "container")))

(defn init []
  (accountant/dispatch-current!)
  (mount-root))
