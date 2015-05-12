/**
 * This object contains all possible options. It will check if the types are correct, if required if the option is one
 * of the allowed values.
 *
 * __any__ means that the name of the property does not matter.
 * __type__ is a required field for all objects and contains the allowed types of all objects
 */
let string = 'string';
let boolean = 'boolean';
let number = 'number';
let array = 'array';
let object = 'object'; // should only be in a __type__ property
let dom = 'dom';
let fn = 'function';
let undef = 'undefined';
let any = 'any'


let allOptions = {
  configure: {
    enabled: {boolean},
    filter: {boolean,string,array},
    container: {dom},
    __type__: {object,boolean,string,array}
  },
  edges: {
    arrows: {
      to: {enabled: {boolean}, scaleFactor: {number}, __type__: {object, boolean}},
      middle: {enabled: {boolean}, scaleFactor: {number}, __type__: {object, boolean}},
      from: {enabled: {boolean}, scaleFactor: {number}, __type__: {object, boolean}},
      __type__: {string:['from','to','middle'],object}
    },
    color: {
      color: {string},
      highlight: {string},
      hover: {string},
      inherit: {string:['from','to','both'],boolean},
      opacity: {number},
      __type__: {object, string}
    },
    dashes: {boolean,array},
    font: {
      color: {string},
      size: {number}, // px
      face: {string},
      background: {string},
      strokeWidth: {number}, // px
      strokeColor: {string},
      align: {string:['horizontal','top','middle','bottom']},
      __type__: {object,string}
    },
    hidden: {boolean},
    hoverWidth: {fn,number},
    label: {string,undef},
    length: {number,undef},
    physics: {boolean},
    scaling: {
      min: {number},
      max: {number},
      label: {
        enabled: {boolean},
        min: {number},
        max: {number},
        maxVisible: {number},
        drawThreshold: {number},
        __type__: {object,boolean}
      },
      customScalingFunction: {fn},
      __type__: {object}
    },
    selectionWidth: {fn,number},
    selfReferenceSize: {number},
    shadow: {
      enabled: {boolean},
      size: {number},
      x: {number},
      y: {number},
      __type__: {object,boolean}
    },
    smooth: {
      enabled: {boolean},
      dynamic: {boolean},
      type: {string},
      roundness: {number},
      __type__: {object,boolean}
    },
    title: {string, undef},
    width: {number},
    value: {number, undef},
    __type__: {object}
  },
  groups: {
    useDefaultGroups: {boolean},
    __any__: 'get from nodes, will be overwritten below',
    __type__: {object}
  },
  interaction: {
    dragNodes: {boolean},
    dragView: {boolean},
    hideEdgesOnDrag: {boolean},
    hideNodesOnDrag: {boolean},
    hoverEnabled: {boolean},
    keyboard: {
      enabled: {boolean},
      speed: {x: {number}, y: {number}, zoom: {number}, __type__: {object}},
      bindToWindow: {boolean},
      __type__: {object,boolean}
    },
    multiselect: {boolean},
    navigationButtons: {boolean},
    selectable: {boolean},
    selectConnectedEdges: {boolean},
    tooltipDelay: {number},
    zoomView: {boolean},
    __type__: {object}
  },
  layout: {
    randomSeed: {undef,number},
    hierarchical: {
      enabled: {boolean},
      levelSeparation: {number},
      direction: {string:['UD','DU','LR','RL']},   // UD, DU, LR, RL
      sortMethod: {string:['hubsize','directed']}, // hubsize, directed
      __type__: {object,boolean}
    },
    __type__: {object}
  },
  manipulation: {
    enabled: {boolean},
    initiallyActive: {boolean},
    addNode: {boolean,fn},
    addEdge: {boolean,fn},
    editNode: {fn},
    editEdge: {boolean,fn},
    deleteNode: {boolean,fn},
    deleteEdge: {boolean,fn},
    controlNodeStyle: 'get from nodes, will be overwritten below',
    __type__: {object,boolean}
  },
  nodes: {
    borderWidth: {number},
    borderWidthSelected: {number,undef},
    brokenImage: {string,undef},
    color: {
      border: {string},
      background: {string},
      highlight: {
        border: {string},
        background: {string},
        __type__: {object,string}
      },
      hover: {
        border: {string},
        background: {string},
        __type__: {object,string}
      },
      __type__: {object,string}
    },
    fixed: {
      x: {boolean},
      y: {boolean},
      __type__: {object,boolean}
    },
    font: {
      color: {string},
      size: {number}, // px
      face: {string},
      background: {string},
      stroke: {number}, // px
      strokeColor: {string},
      __type__: {object,string}
    },
    group: {string,number,undef},
    hidden: {boolean},
    icon: {
      face: {string},
      code: {string},  //'\uf007',
      size: {number},  //50,
      color: {string},
      __type__: {object}
    },
    id: {string, number},
    image: {string,undef}, // --> URL
    label: {string,undef},
    level: {number,undef},
    mass: {number},
    physics: {boolean},
    scaling: {
      min: {number},
      max: {number},
      label: {
        enabled: {boolean},
        min: {number},
        max: {number},
        maxVisible: {number},
        drawThreshold: {number},
        __type__: {object, boolean}
      },
      customScalingFunction: {fn},
      __type__: {object}
    },
    shadow: {
      enabled: {boolean},
      size: {number},
      x: {number},
      y: {number},
      __type__: {object,boolean}
    },
    shape: {string:['ellipse', 'circle', 'database', 'box', 'text','image', 'circularImage','diamond', 'dot', 'star', 'triangle', 'triangleDown', 'square','icon']},
    size: {number},
    title: {string,undef},
    value: {number,undef},
    x: {number},
    y: {number},
    __type__: {object}
  },
  physics: {
    barnesHut: {
      gravitationalConstant: {number},
      centralGravity: {number},
      springLength: {number},
      springConstant: {number},
      damping: {number},
      __type__: {object}
    },
    forceAtlas2Based: {
      gravitationalConstant: {number},
      centralGravity: {number},
      springLength: {number},
      springConstant: {number},
      damping: {number},
      __type__: {object}
    },
    repulsion: {
      centralGravity: {number},
      springLength: {number},
      springConstant: {number},
      nodeDistance: {number},
      damping: {number},
      __type__: {object}
    },
    hierarchicalRepulsion: {
      centralGravity: {number},
      springLength: {number},
      springConstant: {number},
      nodeDistance: {number},
      damping: {number},
      __type__: {object}
    },
    maxVelocity: {number},
    minVelocity: {number},    // px/s
    solver: {string:['barnesHut','repulsion','hierarchicalRepulsion','forceAtlas2Based']},
    stabilization: {
      enabled: {boolean},
      iterations: {number},   // maximum number of iteration to stabilize
      updateInterval: {number},
      onlyDynamicEdges: {boolean},
      fit: {boolean},
      __type__: {object,boolean}
    },
    timestep: {number},
    __type__: {object,boolean}
  },

  //globals :
  autoResize: {boolean},
  clickToUse: {boolean},
  locale:{string},
  locales:{
    __any__: {object},
    __type__: {object}
  },
  height: {string},
  width: {string},
  __type__: {object}
};

allOptions.groups.__any__ = allOptions.nodes;
allOptions.manipulation.controlNodeStyle = allOptions.nodes;


let configureOptions = {
  nodes: {
    borderWidth: [1, 0, 10, 1],
    borderWidthSelected: [2, 0, 10, 1],
    color: {
      border: ['color','#2B7CE9'],
      background: ['color','#97C2FC'],
      highlight: {
        border: ['color','#2B7CE9'],
        background: ['color','#D2E5FF']
      },
      hover: {
        border: ['color','#2B7CE9'],
        background: ['color','#D2E5FF']
      }
    },
    fixed: {
      x: false,
      y: false
    },
    font: {
      color: ['color','#343434'],
      size: [14, 0, 100, 1], // px
      face: ['arial', 'verdana', 'tahoma'],
      background: ['color','none'],
      strokeWidth: [0, 0, 50, 1], // px
      strokeColor: ['color','#ffffff']
    },
    //group: 'string',
    hidden: false,
    //icon: {
    //  face: 'string',  //'FontAwesome',
    //  code: 'string',  //'\uf007',
    //  size: [50, 0, 200, 1],  //50,
    //  color: ['color','#2B7CE9']   //'#aa00ff'
    //},
    //image: 'string', // --> URL
    physics: true,
    scaling: {
      min: [10, 0, 200, 1],
      max: [30, 0, 200, 1],
      label: {
        enabled: true,
        min: [14, 0, 200, 1],
        max: [30, 0, 200, 1],
        maxVisible: [30, 0, 200, 1],
        drawThreshold: [3, 0, 20, 1]
      }
    },
    shadow:{
      enabled: false,
      size:[10, 0, 20, 1],
      x:[5, -30, 30, 1],
      y:[5, -30, 30, 1]
    },
    shape: ['ellipse', 'box', 'circle', 'database', 'diamond', 'dot', 'square', 'star', 'text', 'triangle', 'triangleDown'],
    size: [25, 0, 200, 1]
  },
  edges: {
    arrows: {
      to: {enabled: false, scaleFactor: [1, 0, 3, 0.05]}, // boolean / {arrowScaleFactor:1} / {enabled: false, arrowScaleFactor:1}
      middle: {enabled: false, scaleFactor: [1, 0, 3, 0.05]},
      from: {enabled: false, scaleFactor: [1, 0, 3, 0.05]}
    },
    color: {
      color: ['color','#848484'],
      highlight: ['color','#848484'],
      hover: ['color','#848484'],
      inherit: ['from','to','both',true, false],
      opacity: [1, 0, 1, 0.05]
    },
    dashes: false,
    font: {
      color: ['color','#343434'],
      size: [14, 0, 100, 1], // px
      face: ['arial', 'verdana', 'tahoma'],
      background: ['color','none'],
      strokeWidth: [1, 0, 50, 1], // px
      strokeColor: ['color','#ffffff'],
      align: ['horizontal', 'top', 'middle', 'bottom']
    },
    hidden: false,
    hoverWidth: [2, 0, 5, 0.1],
    physics: true,
    scaling: {
      min: [1, 0, 100, 1],
      max: [15, 0, 100, 1],
      label: {
        enabled: true,
        min: [14, 0, 200, 1],
        max: [30, 0, 200, 1],
        maxVisible: [30, 0, 200, 1],
        drawThreshold: [3, 0, 20, 1]
      }
    },
    selectionWidth: [1.5, 0, 5, 0.1],
    selfReferenceSize: [20, 0, 200, 1],
    shadow:{
      enabled: false,
      size:[10, 0, 20, 1],
      x:[5, -30, 30, 1],
      y:[5, -30, 30, 1]
    },
    smooth: {
      enabled: true,
      dynamic: true,
      type: ['continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW'],
      roundness: [0.5, 0, 1, 0.05]
    },
    width: [1, 0, 30, 1]
  },
  layout: {
    randomSeed: [0, 0, 500, 1],
    hierarchical: {
      enabled: false,
      levelSeparation: [150, 20, 500, 5],
      direction: ['UD', 'DU', 'LR', 'RL'],   // UD, DU, LR, RL
      sortMethod: ['hubsize', 'directed'] // hubsize, directed
    }
  },
  interaction: {
    dragNodes: true,
    dragView: true,
    hideEdgesOnDrag: false,
    hideNodesOnDrag: false,
    hoverEnabled: false,
    keyboard: {
      enabled: false,
      speed: {x: [10, 0, 40, 1], y: [10, 0, 40, 1], zoom: [0.02, 0, 0.1, 0.005]},
      bindToWindow: true
    },
    multiselect: false,
    navigationButtons: false,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: [300, 0, 1000, 25],
    zoomView: true
  },
  manipulation: {
    enabled: false,
    initiallyActive: false
  },
  physics: {
    barnesHut: {
      //theta: [0.5, 0.1, 1, 0.05],
      gravitationalConstant: [-2000, -30000, 0, 50],
      centralGravity: [0.3, 0, 10, 0.05],
      springLength: [95, 0, 500, 5],
      springConstant: [0.04, 0, 5, 0.005],
      damping: [0.09, 0, 1, 0.01]
    },
    forceAtlas2Based: {
      //theta: [0.5, 0.1, 1, 0.05],
      gravitationalConstant: [-800, -3000, 0, 50],
      centralGravity: [0.01, 0, 1, 0.005],
      springLength: [95, 0, 500, 5],
      springConstant: [0.08, 0, 5, 0.005],
      damping: [0.4, 0, 1, 0.01]
    },
    repulsion: {
      centralGravity: [0.2, 0, 10, 0.05],
      springLength: [200, 0, 500, 5],
      springConstant: [0.05, 0, 5, 0.005],
      nodeDistance: [100, 0, 500, 5],
      damping: [0.09, 0, 1, 0.01]
    },
    hierarchicalRepulsion: {
      centralGravity: [0.2, 0, 10, 0.05],
      springLength: [100, 0, 500, 5],
      springConstant: [0.01, 0, 5, 0.005],
      nodeDistance: [120, 0, 500, 5],
      damping: [0.09, 0, 1, 0.01]
    },
    maxVelocity: [50, 0, 150, 1],
    minVelocity: [0.1, 0.01, 0.5, 0.01],
    solver: ['barnesHut', 'repulsion', 'hierarchicalRepulsion','forceAtlas2Based'],
    timestep: [0.5, 0, 1, 0.05]
  },
  global: {
    locale: ['en', 'nl']
  }
};




export {allOptions, configureOptions};