(function($) {
    $(function() {
        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000); // 渲染器背景

        // 场景
        var scene = new THREE.Scene();
        drawAxes(scene); // 绘制坐标系

        // 正交投影照相机
        var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);

        camera.position.set(25, 25, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // 材质
        var material = new THREE.MeshLambertMaterial({
            color: 0xffff00,
            wireframe: true
        });

        // 创建长方体
        var geometry = new THREE.CubeGeometry(1, 2, 3, 2, 2, 3);
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 更改网格属性
        cube.material = new THREE.MeshLambertMaterial({
            color: 0xffff00
        });

        // 设置位置属性
        cube.position.z = 2;

        // 设置多个位置属性值
        cube.position.set(1, 2, 3);

        // 设置缩放属性
        cube.scale.x = 2;

        // 设置多个缩放属性值
        cube.scale.set(2, 1, 1);

        // 设置旋转属性
        cube.rotation.y = 0;

        // 设置多个旋转属性
        cube.rotation.set(90, -90, 180);

        // light
        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 15, 20);
        scene.add(light);

        // render
        renderer.render(scene, camera);
    });


    

    /**
     * [drawAxes 绘制坐标系函数，x轴红色，y轴绿色，z轴蓝色]
     * @param  {[Object]} scene [场景]
     */
    function drawAxes(scene) {
        // x-axis
        var xGeo = new THREE.Geometry();
        xGeo.vertices.push(new THREE.Vector3(0, 0, 0));
        xGeo.vertices.push(new THREE.Vector3(1, 0, 0));
        var xMat = new THREE.LineBasicMaterial({
            color: 0xff0000
        });
        var xAxis = new THREE.Line(xGeo, xMat);
        scene.add(xAxis);

        // y-axis
        var yGeo = new THREE.Geometry();
        yGeo.vertices.push(new THREE.Vector3(0, 0, 0));
        yGeo.vertices.push(new THREE.Vector3(0, 1, 0));
        var yMat = new THREE.LineBasicMaterial({
            color: 0x00ff00
        });
        var yAxis = new THREE.Line(yGeo, yMat);
        scene.add(yAxis);

        // z-axis
        var zGeo = new THREE.Geometry();
        zGeo.vertices.push(new THREE.Vector3(0, 0, 0));
        zGeo.vertices.push(new THREE.Vector3(0, 0, 1));
        var zMat = new THREE.LineBasicMaterial({
            color: 0x00ccff
        });
        var zAxis = new THREE.Line(zGeo, zMat);
        scene.add(zAxis);
    }
})(jQuery)