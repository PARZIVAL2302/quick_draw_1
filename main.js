array_1=['pen','pizza','book','bottle','flower','vase'];

random_number = Math.floor((Math.random()*array_1.length)+1);

console.log(array_1[random_number]);
sketch = array_1[random_number];

to_draw = sketch_to_be_draw.getValue();

document.getElementById.innerhtml="to_draw" + sketch;