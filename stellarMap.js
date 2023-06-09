import * as BABYLON from 'https://cdn.babylonjs.com/babylon.js';


function createScene()
{
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2,
Math.PI / 2.5, 3, new vector3(0,0,0), scene);
camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight("light", new vector3(0,1,0), scene);

const box = MeshBuilder.CreateBox("box", {}, scene);

return scene;
}

createScene();
