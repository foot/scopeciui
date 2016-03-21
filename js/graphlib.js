function findRoots(parents) {
    var roots = [];
		Object.keys(parents).forEach(function(child) {
			var parent = parents[child] + '';
			if (!parents[parent]) {
				roots.push(child);
			}
    });
    return roots;
}


function buildTree(head, commitParents, children) {
  console.log('build tree....');
  // console.log(head, commitParents, children);
  const newCommitParents = Object.assign({}, commitParents);

  let count = 0;
  const recur = function(h) {
    count += 1;
    const cs = children[h];
    if (!cs || !cs.length) {
      return;
    }
    cs.forEach(function(c) {
      if (newCommitParents[c]) {
        return;
      }
      newCommitParents[c] = h;
      recur(c);
    });
  }

  recur(head);

  console.log(count);
  // console.log(newCommitParents);
  return newCommitParents;
}


function toData(parents, nodeList) {

		var nodes = {};
		var root = null;

    var roots = findRoots(parents);
    if (roots.length > 1) {
      var superRoot = "superRoot"
      console.log('roots', roots, parents, nodeList);
      parents[superRoot] = null;
      nodes[superRoot] = {name: superRoot, children: roots};
      roots.forEach(function(r) {
        parents[r] = superRoot;
      });
    } else {
      console.log('only one root today!');
    }

		Object.keys(parents).forEach(function(child) {
			var parent = parents[child] + '';

			if (!parents[parent]) {
				console.log('root!', child);
				root = child;
				return;
			}

			var parentNode = nodes[parent] || {name: parent};
			var childNode = nodes[child] || {name: child};

			parentNode.children = parentNode.children || [];
			parentNode.children.push(childNode);

			nodes[parent] = parentNode;
			nodes[child] = childNode;
		});

    // patch up the superRoot children
    if (superRoot) {
      nodeList.unshift("superRoot");
      nodes[superRoot].children = nodes[superRoot].children.map(function(c) {
        return nodes[c];
      });
    }

		return [nodeList, nodes[root]];
};
