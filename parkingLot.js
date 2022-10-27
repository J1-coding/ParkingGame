window.onload = function init()
{

    const canvas = document.getElementById("gl-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = -100;
    camera.position.y = 40;
    camera.position.z = 70;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // hlight = new THREE.AmbientLight (0x000000,50);
	// scene.add(hlight);
    hlight = new THREE.HemisphereLight ();
    scene.add(hlight);
    light = new THREE.PointLight(0x000000, 100);
    light.position.set(0, 3000, 0);
    scene.add(light);

    const loader = new THREE.GLTFLoader();
    loader.load('./model/parkingLot/scene.gltf', function(gltf) {
        parkingLot = gltf.scene.children[0];
        parkingLot.scale.set(0.1, 0.1, 0.1);
        parkingLot.position.x = -100;
        parkingLot.position.y = -60;
        parkingLot.position.z = 0;
        
        scene.add(gltf.scene);
        animate();
    }, undefined, function (error) {
        console.log(error);
    });

    loader.load('./model/car/scene.gltf', function(gltf) {
        car = gltf.scene.children[0];
        car.scale.set(2, 2, 2);
        car.position.x = -10;
        car.position.y = -60;
        car.position.z = -65;
        car.rotation.z = Math.PI * 0.5;

        
        scene.add(gltf.scene);
        animate();
    }, undefined, function (error) {
        console.log(error);
    });

    loader.load('./model/car/scene.gltf', function(gltf) {
        car = gltf.scene.children[0];
        car.scale.set(2, 2, 2);
        car.position.x = -10;
        car.position.y = -60;
        car.position.z = -85;
        car.rotation.z = Math.PI * 0.5;

        
        scene.add(gltf.scene);
        animate();
    }, undefined, function (error) {
        console.log(error);
    });

    loader.load('./model/car2/scene.gltf', function(gltf) {
        car2 = gltf.scene.children[0];
        car2.scale.set(0.04, 0.04, 0.04);
        car2.position.x = 38;
        car2.position.y = -60;
        car2.position.z = -85;
        car2.rotation.z = Math.PI * 1;

        
        scene.add(gltf.scene);
        animate();
    }, undefined, function (error) {
        console.log(error);
    });

    loader.load('./model/car3/scene.gltf', function(gltf) {
        car2 = gltf.scene.children[0];
        car2.scale.set(0.25, 0.25, 0.25);
        car2.position.x = -18;
        car2.position.y = -60;
        car2.position.z = -120;
        car2.rotation.z = Math.PI;

        
        scene.add(gltf.scene);
        animate();
    }, undefined, function (error) {
        console.log(error);
    });

    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

}
