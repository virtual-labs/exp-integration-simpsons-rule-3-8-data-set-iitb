let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Integration: Simpson's Rule (3/8)</h4>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 1</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='internal_calculations_1();' id='temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Dataset', 'act1-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act1-div'>
         <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
               <tr id='x-values'>
                  <th class='table-dark'>x</th>
               </tr>

               <tr id='y-values'>
                  <th class='table-dark'>y</th>
               </tr>
            </table>
         </div>
         <button class='btn btn-info std-btn'  onclick='plot_graph();' id='plot-graph-btn' >Plot Graph</button>
         
         <div id="graph-div" style="display:none;">
            <canvas id='act1-graph'></canvas>
            <br>
            <button class='btn btn-info std-btn'  onclick='load_I();' id='act1-btn1' >Next</button>
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    load_xy_values();
}
function internal_calculations_1() {
    generate_data(x_start, x, y);
    I = 0;
    I = sim3by8(x, y);
    console.log(x);
    console.log(y);
    console.log(I);
    start_act1();
}
function load_xy_values() {
    let x_val = (document.getElementById('x-values'));
    let y_val = (document.getElementById('y-values'));
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
        x_val.innerHTML += `<td>${x[i]}</td>`;
        y_val.innerHTML += `<td>${y[i].toFixed(4)}</td>`;
    }
}
function plot_graph() {
    let btn = (document.getElementById('plot-graph-btn'));
    btn && btn.remove();
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
    var ctx = document.getElementById('act1-graph');
    ctx.style.backgroundColor = 'white';
    ctx.style.marginTop = '5px';
    // ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: x,
            datasets: [
                {
                    label: 'x',
                    data: y,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'y',
                        font: { size: 14, weight: 'bold' },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'x',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: `x vs y`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
function load_I() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>

   <div id="I-div">
      <div class="row justify-content-center" style="align-items:center">
         <div class="col-md-7">
            $$ I = \\frac{3h}{8}\\left(y_1 + 3y_2 + 3y_3 + 2y_4 + 3y_5 + 3y_6 + y_7\\right) =  $$
         </div>
         <div class="col-md-4">
            <input type='number' id='I-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn2' onclick='verify_I();' >Verify</button>
      <button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn3' onclick='exp_complete();' >Next</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    plot_graph();
}
// function after_verify_table1() {
// 	let header = ['iter', 'x1', 'f(x1)', 'x2', 'f(x2)'];
// 	let tb_box: HTMLDivElement = <HTMLDivElement>(
// 		document.getElementById('act1-tb-box1')
// 	);
// 	let btn: HTMLButtonElement = <HTMLButtonElement>(
// 		document.getElementById('act1-btn-2')
// 	);
// 	btn.style.display = 'block';
// 	tb_box.innerHTML = '';
// 	let t = new Show_Table_Custom_Fixed(header, act1_table_data1, tb_box, 5);
// 	t.load_table();
// }
// function load_questions() {
// 	let btn: HTMLButtonElement = <HTMLButtonElement>(
// 		document.getElementById('act1-btn-3')
// 	);
// 	btn && btn.remove();
// 	let outer_div: HTMLDivElement = <HTMLDivElement>(
// 		document.getElementById('act1-div')
// 	);
// 	outer_div.innerHTML += `
//    <br>
//    <div id="question-div">
//       <div class="row justify-content-center" style="align-items:center">
//          <div class="col-md-5">
//             What is function value of 3<sup>rd</sup> iteration?
//          </div>
//          <div class="col-md-4">
//             <input type='number' id='func-val-inp' class='form-control fs-16px' />
//          </div>
//       </div>
//       <br>
//       <div class="row justify-content-center" style="align-items:center">
//          <div class="col-md-5">
//             What is root value of 3<sup>rd</sup> iteration?
//          </div>
//          <div class="col-md-4">
//             <input type='number' id='root-val-inp' class='form-control fs-16px' />
//          </div>
//       </div>
//       <br>
//       <button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn-4' onclick='verify_answer();' >Verify</button>
//       <button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn-5' onclick='exp_complete();' >Next</button>
//    </div>
//    `;
// 	display_chart();
// }
function verify_I() {
    let graph_div = (document.getElementById('graph-div'));
    let btn = (document.getElementById('act1-btn2'));
    let next_btn = (document.getElementById('act1-btn3'));
    let I_inp = (document.getElementById('I-inp'));
    console.log(I);
    if (!verify_values(parseFloat(I_inp.value), parseFloat(I.toFixed(4)))) {
        I_inp.style.border = '1px solid red';
        alert('Incorrect integration value');
        return;
    }
    else {
        I_inp.style.border = '1px solid #ced4da';
        I_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    graph_div.innerHTML = '';
    graph_div.innerHTML = `
   <canvas id="act1-graph"></canvas>
   `;
    plot_graph();
    btn && btn.remove();
    next_btn.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map