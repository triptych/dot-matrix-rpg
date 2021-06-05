// https://observablehq.com/@triptych/dot-matrix-rpg@222
export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["tile_0000.png",new URL("./files/b5e12cfab5458987ae8782f81bc6a4664794c9d176c0f41c04cfef3b5ba4ae54011e44a9a3f79e662d10157f7b20c9eae98fed2e60746071d037c11c9b5508bc",import.meta.url)],["tile_0016.png",new URL("./files/66566fdfdd4ffb608d3acffc3ce89e2555a95049e2d57a8d6ff6ca98da7eb0bc1e0d738e0e12e96663ca6f47ed3e3edc672c16b7cc01b7cf8bda7e7b66a00e3f",import.meta.url)],["tile_0013.png",new URL("./files/b535781f1132e5c5eb171279eeea43bb80f50c8269cfbfc6f2eb715820f1ce3acf27db0ebe3ff158c02b435190a2a0e84fe8ce5101e1202ca0bac3f4b752edb7",import.meta.url)],["tile_0086@1.png",new URL("./files/f09e6812c2c2c3477980fc90ea3fdbd6f89cebbb01d688cd090f3cc490e9a9da0534a5ff102a0cef8c3304f7cca23de77ff993dc86fad61930aaa0abd51e3458",import.meta.url)],["tile_0087@1.png",new URL("./files/ed2270266cdc40fd8149f01851b696e830798f4d44b30fe3ebdd4dd4469505bce1623df3d98ee2aea69a99e45167d9b0528ed008d423bcb0d6385a151a68ae1f",import.meta.url)],["tile_0119@1.png",new URL("./files/74392c93ff15dd27f6d87620697cff76cfb172577b9a3f7ee5be9921d902729cf00688f423fef8996611674c59f609c25580cf84d7db249fbd7ce15da814b1a8",import.meta.url)],["tile_0104@1.png",new URL("./files/32e78ab4b33a86392a6a2d169f33707bdac906c20e3db3627b836e56d2ae4ab7c095e52ff2e0c47a7a4bcdc2e281683e9a0cfec58763f8a8c89f37344fa056bb",import.meta.url)],["tile_0125@1.png",new URL("./files/48fe9644af70a93df3531fa96a1517fe299b5c7df3831549bef461cf9be835e284009e996496e9dfe87f4fce586e60319e5207125bc68ea6ffd637fe5c40a45e",import.meta.url)],["DOT Matrix.png",new URL("./files/9227be6e9ef9d2c7a0d76d6643e92c081c6a74e2ff9c23c1ae3a2129b83370652ad997d36e3bdd42746239b64a1220c7388c23702ccad8905e97afa16ebc82da",import.meta.url)],["The Hero.ogg",new URL("./files/dea7c0ae826f128e84a2e8aec0d920eb856fe670c2875a121e1ef9abde7c3e3813832f4db36432b6ff8af814ed8646d9356d80b65b80bf2241dad65017f3d947",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Dot Matrix RPG`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<p>What is Dot Matrix RPG? It's a very simple tile based RPG to test out KaboomJS in Observable using Kenney assets.</p>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`
  <div class="container">
    <canvas id="rpg"></canvas>
  </div>
`
)});
  main.variable(observer("k")).define("k", ["KABOOM"], function(KABOOM){return(
KABOOM({
    width: 180,
    height: 180,
    scale: 4,
    canvas: document.getElementById("rpg"),
    clearColor: [0,0,0,1]
  })
)});
  main.variable(observer("scene_splashscreen")).define("scene_splashscreen", ["k"], function(k){return(
()=>{
    k.add([
		  k.sprite("splash"),
		  k.scale(k.width()/720, k.height()/720),
	  
	]);
    k.add([
      k.text("Press Enter to Start", 8),
		  k.pos(10, 140),
    ])
    k.keyPress("enter", ()=>{
      k.go("intro")
    })
  }
)});
  main.variable(observer("scene_main")).define("scene_main", ["k"], function(k){return(
()=>{
    const levels = [
      [
        "################################################################",
        "#==============================================================#",
        "#==============================================================#",
        "#⟶⟶⟶⟶⌉=========================================================#",
        "#====V=========================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",        
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "#==============================================================#",
        "################################################################"
      ],
      [
        "          ",
        "     b    ",
        "          ",
        "          ",
        "     p    ",
        "          ",
        "          ",
        " b        ",
        "          ",
        "          ",
      ]
    ];

    k.addLevel(levels[0],{
      width: 16,
		  height: 16,
		  pos: k.vec2(10, 10),
      "=": [
			  k.sprite("grass")
		  ],
      "#":[
        k.sprite("tree"),
        k.solid()
      ],
      "^":[
        k.sprite("bigtree"),
        k.solid()
      ],
      "⌉":[
        k.sprite("path_left_down"),
      ],
      "⟶":[
        k.sprite("path_left_right")
      ],
      "V": [
        k.sprite("path_up_down")
      ]

    });
    
    k.addLevel(levels[1],{
      width: 16,
		  height: 16,
		  pos: k.vec2(10, 10),
      "p":[
        k.sprite("player"),
        "player",
        k.solid()
      ],
      "b":[
        k.sprite("boo"),
        k.solid(),
        "enemy"
      ]
    });

    const player = k.get("player")[0];

  // camera position follow player
player.action(() => {
    k.camPos(player.pos);
});

// add life meter
    const scorebox = k.add([
    k.rect(100,11),
    k.pos(12,12),
    k.layer("ui"),
    k.color(0,0,0)
  ])
  const score = k.add([
		k.text("Life: ****"),
		k.pos(13, 13),
		k.layer("ui"),
    k.color(1,1,1),
		{ 
      label: "Life:",
      value: "****", 
    },
	]);

  
  

  
    const enemy = k.get("enemy")[0];
    
    k.keyPress("left", () => {
    		player.moveLeft();
        const targets = player.resolve()
        if (targets.length
          && targets.find(t => t.obj.gridPos.x === player.gridPos.x && t.obj.gridPos.y === player.gridPos.y)
        ) {
          player.moveRight()
        }
    	});

    k.keyPress("right", () => {
    		player.moveRight();
      // handle tile collision
        const targets = player.resolve()
        if (targets.length
          && targets.find(t => t.obj.gridPos.x === player.gridPos.x && t.obj.gridPos.y === player.gridPos.y)
        ) {
          player.moveLeft()
        }
    	});

  	k.keyPress("up", () => {
  		player.moveUp();
      // handle tile collision
      const targets = player.resolve()
      if (targets.length
        && targets.find(t => t.obj.gridPos.x === player.gridPos.x && t.obj.gridPos.y === player.gridPos.y)
      ) {
        player.moveDown()
      }
  	});
  
  	k.keyPress("down", () => {
  		player.moveDown();
      const targets = player.resolve()
      if (targets.length
        && targets.find(t => t.obj.gridPos.x === player.gridPos.x && t.obj.gridPos.y === player.gridPos.y)
      ) {
        player.moveUp()
      }
  	});

    k.keyPress("space", () => {
  		  if (music.paused()) {
  			  music.play();
  		  } else {
  			  music.pause();
  		  }
    });

    k.action("enemy", (e)=>{
      //const chance = getRandomInt(0,100);
      const chance = k.rand(0,100);
      
      if(chance > 98){
        const dir = Math.floor(k.rand(1,5));
        console.log("dir", dir)
        switch(dir){
          case 1:
            e.moveUp();
            break;
          case 2:
            e.moveDown();
            break;
          case 3:
            e.moveLeft();
            break;
          case 4:
            e.moveRight()
            break;
        }
      }
    });

    // play sound
    const music = k.play("bgsound", {
      loop: true
    });
    music.volume(0.3)
    k.volume(0.3)

  // layers stuff
  k.layers([
    "bg",
    "obj",
    "ui"
  ], "obj"); // obj is "default" layer

// don't move the UI in the view port
  k.camIgnore([ "ui", ]);

}
)});
  main.variable(observer("scene_intro")).define("scene_intro", ["k"], function(k){return(
()=>{
  const obj = k.add([
    k.text(`
Welcome to Dot Matrix RPG! This is a demo game without much of a real purpose other than to show off Observable working with Kaboom JS and some nice sprites and music. 

Press Enter to continue.

`, 4, {
        width: 120, // wrap when exceeds this width (defaults to 0 no wrap)
        //font: "proggy", // font to use (defaults to "unscii")
    }),
    k.pos(10, 10)
]);

      k.keyPress("enter", ()=>{
        k.go("main")
    })
}
)});
  main.variable(observer("main")).define("main", ["k","FileAttachment","scene_splashscreen","scene_main","scene_intro"], async function(k,FileAttachment,scene_splashscreen,scene_main,scene_intro)
{
  // load sprites
  k.loadSprite("grass", await FileAttachment("tile_0000.png").url())
  k.loadSprite("tree", await FileAttachment("tile_0013.png").url())
  k.loadSprite("player", await FileAttachment("tile_0119@1.png").url())
  k.loadSprite("bigtree", await FileAttachment("tile_0016.png").url())
  k.loadSprite("boo", await FileAttachment("tile_0125@1.png").url())
  k.loadSprite("splash", await FileAttachment("DOT Matrix.png").url())

  k.loadSprite("path_left_down", await FileAttachment("tile_0086@1.png").url())
  k.loadSprite("path_left_right", await FileAttachment("tile_0087@1.png").url())
  k.loadSprite("path_up_down", await FileAttachment("tile_0104@1.png").image())
  // load sounds
  k.loadSound("bgsound", await FileAttachment("The Hero.ogg").url())
  
  // scenes ( levels in RPG)
  k.scene("splashscreen", scene_splashscreen )  
  k.scene("main", scene_main);
  k.scene("intro", scene_intro);

  k.start("splashscreen")
  
  
}
);
  main.variable(observer("getRandomInt")).define("getRandomInt", function(){return(
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
)});
  main.variable(observer("KABOOM")).define("KABOOM", ["require"], function(require){return(
require('kaboom@0.5.1/dist/kaboom.js').catch(() => window["kaboom"])
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Credits
* Tiles by Kenney - https://kenney.nl/assets/monochrome-rpg
* Game engine by https://kaboomjs.com
* BG Music by https://opengameart.org/content/8-bit-the-hero`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Info
* Game created by Andrew Wooldridge - https://andreww.xyz `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Log

- May 31 - Added Life Meter (not live) and persist the UI as the player moves. Some lag is showing up.
- May 30 - Center the camera on the player. Expand the world to 64x64 tiles. Add paths.
- May 30 - More refactoring. Adding Intro screen with explaination text.
- May 29 - Added Background Music. Spacebar to pause. 
- May 29 - some code changes - using Kaboom for randomness.
- May 28 - Added splash screen. Enter to start.
- May 27 - Added movement and collision detection.
- May 27 - Added ghosties and random movement.
  `
)});
  main.variable(observer("fontName")).define("fontName", function(){return(
"Press Start 2P"
)});
  main.variable(observer()).define(["fontName","htl"], function(fontName,htl){return(
htl.html`<style>
@import url('https://fonts.googleapis.com/css2?family=${fontName}&display=swap');

  div, input, button {
    font-family: '${fontName}', sans-serif;
  }
</style>`
)});
  return main;
}
