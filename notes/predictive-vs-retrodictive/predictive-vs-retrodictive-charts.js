google.charts.load( 'current' ,  { 'packages' : [ 'corechart' ] } ) ;
google.charts.setOnLoadCallback(chartLoadCallback) ;


function g( s , u , v )
{
    let y = [] ;
    for ( let i = 0 ; i < s.length ; i++ )
    {
        y[i] = u / ( u + s[i] * v ) ;
    }
    return y ;
}


function h1( y1 , y2 )
{
    return g( t , y1 , y2 ) ;
}


function h2( y1 , y2 )
{
    return g( t , 1 - y1 , 1 - y2 ) ;
}


function k1( y1 , y2 )
{
    return g( t , y1 , 1 - y2 ) ;
}


function k2( y1 , y2 )
{
    return g( t_inv , y2 , 1 - y1 ) ;
}


function get_x_and_t(n)
{
    let x_and_t = {} ;
    x_and_t.x     = [] ;
    x_and_t.t     = [] ;
    x_and_t.t_inv = [] ;
    for ( let i = 0 ; i <= n ; i++ )
    {
        x_and_t.x[i]     = i / n ;
        x_and_t.t[i]     = ( n - i ) / i ;
        x_and_t.t_inv[i] = i / ( n - i ) ;
    }
    return x_and_t ;
}


function chartLoadCallback()
{
    drawChart() ;
    window.onresize = function(event) { drawChart() ; } ;
}


function init_chartOptions()
{
    let chartOptions_init = {} ;
    
    chartOptions_init.title = 'Chart title TBD' ;
    chartOptions_init.titlePosition = 'none' ;
    chartOptions_init.curveType = 'function' ;
    chartOptions_init.selectionMode = 'multiple' ;
    
    chartOptions_init.hAxis = {} ;
    chartOptions_init.hAxis.title = 'Horizontal axis title TBD' ;
    chartOptions_init.hAxis.titleTextStyle = {} ;
    chartOptions_init.hAxis.titleTextStyle.italic = false ;
    chartOptions_init.hAxis.titleTextStyle.bold = true ;
    chartOptions_init.hAxis.format = 'percent' ;
    chartOptions_init.hAxis.textStyle = {} ;
    chartOptions_init.hAxis.textStyle.bold = true ;
    
    chartOptions_init.vAxis = {} ;
    chartOptions_init.vAxis.format = 'percent' ;
    chartOptions_init.vAxis.textStyle = {} ;
    chartOptions_init.vAxis.textStyle.bold = true ;
    
    chartOptions_init.legend = {} ;
    chartOptions_init.legend.position = 'top' ;
    chartOptions_init.legend.alignment = 'center' ;
    chartOptions_init.legend.textStyle = {} ;
    chartOptions_init.legend.textStyle.bold = true ;
    
    chartOptions_init.lineWidth = 3 ;
    chartOptions_init.colors = [ 'green' , 'red' ] ;
    
    chartOptions_init.chartArea = {} ;
    chartOptions_init.chartArea.width = '60%' ;
    chartOptions_init.chartArea.height = '80%' ;
    
    chartOptions_init.tooltip = {} ;
    chartOptions_init.tooltip.trigger = 'both' ;
    
    chartOptions_init.aggregationTarget = 'none' ;
    chartOptions_init.focusTarget = 'category' ;
    
    chartOptions_init.explorer = {} ;
    chartOptions_init.explorer.axis = 'horizontal' ;
    chartOptions_init.explorer.actions = [ 'dragToZoom' , 'rightClickToReset' ] ;
    
    chartOptions_init.crosshair = {} ;
    chartOptions_init.crosshair.trigger = 'both' ;
    chartOptions_init.crosshair.orientation = 'vertical' ;
    chartOptions_init.crosshair.color = 'grey' ;
    
    chartOptions_init.my_options = {} ;
    
    chartOptions_init.my_options.dataColHdr = [] ;
    chartOptions_init.my_options.dataColHdr[0] = 'Col hdr 0 TBD' ;
    chartOptions_init.my_options.dataColHdr[1] = 'Col hdr 1 TBD' ;
    chartOptions_init.my_options.dataColHdr[2] = 'Col hdr 2 TBD' ;
    
    chartOptions_init.my_options.sliderHdr = [] ;
    chartOptions_init.my_options.sliderHdr[0] = 'Sldr hdr 0 TBD' ;
    chartOptions_init.my_options.sliderHdr[1] = 'Sldr hdr 1 TBD' ;
    
    return chartOptions_init ;
}


function setup_from_TPR_FPR_to_pTPR_pFNR(chartOptions_in)
{
    let chartOptions_out = chartOptions_in ;
    
    chartOptions_out.title = 'from (retrodictive) TPR and FPR to (predictive) pTPR and pFNR' ;
    chartOptions_out.hAxis.title = 'Proportion of observed positive class' ;
    
    chartOptions_out.my_options.dataColHdr[0] = 'ObsvPosCl' ;
    chartOptions_out.my_options.dataColHdr[1] = 'pTPR' ;
    chartOptions_out.my_options.dataColHdr[2] = 'pFNR' ;
    
    chartOptions_init.my_options.sliderHdr[0] = 'TPR' ;
    chartOptions_init.my_options.sliderHdr[1] = 'FPR' ;
    
    return chartOptions_out ;
}


function setup_from_pTPR_pFNR_to_TPR_FPR(chartOptions_in)
{
    let chartOptions_out = chartOptions_in ;
    
    chartOptions_out.title = 'from (predictive) pTPR and pFNR to (retrodictive) TPR and FPR' ;
    chartOptions_out.hAxis.title = 'Proportion of predicted positive class' ;
    
    chartOptions_out.my_options.dataColHdr[0] = 'PredPosCl' ;
    chartOptions_out.my_options.dataColHdr[1] = 'TPR' ;
    chartOptions_out.my_options.dataColHdr[2] = 'FPR' ;
    
    chartOptions_init.my_options.sliderHdr[0] = 'pTPR' ;
    chartOptions_init.my_options.sliderHdr[1] = 'pFNR' ;
    
    return chartOptions_out ;
}


function setup_from_TPR_TNR_to_PPV_NPV(chartOptions_in)
{
    let chartOptions_out = chartOptions_in ;
    
    chartOptions_out.title = 'from (retrodictive) TPR and TNR to (predictive) PPV and NPV' ;
    chartOptions_out.hAxis.title = 'Proportion of observed positive class' ;
    
    chartOptions_out.my_options.dataColHdr[0] = 'ObsvPosCl' ;
    chartOptions_out.my_options.dataColHdr[1] = 'PPV' ;
    chartOptions_out.my_options.dataColHdr[2] = 'NPV' ;
    
    chartOptions_init.my_options.sliderHdr[0] = 'TPR' ;
    chartOptions_init.my_options.sliderHdr[1] = 'TNR' ;
    
    return chartOptions_out ;
}


function setup_from_PPV_NPV_to_TPR_TNR(chartOptions_in)
{
    let chartOptions_out = chartOptions_in ;
    
    chartOptions_out.title = 'from (predictive) PPV and NPV to (retrodictive) TPR and TNR' ;
    chartOptions_out.hAxis.title = 'Proportion of predicted positive class' ;
    
    chartOptions_out.my_options.dataColHdr[0] = 'PredPosCl' ;
    chartOptions_out.my_options.dataColHdr[1] = 'TPR' ;
    chartOptions_out.my_options.dataColHdr[2] = 'TNR' ;
    
    chartOptions_init.my_options.sliderHdr[0] = 'PPV' ;
    chartOptions_init.my_options.sliderHdr[1] = 'NPV' ;
    
    return chartOptions_out ;
}


function init_chartData()
{
    let chartData_init = [ chartOptions.my_options.dataColHdr ] ;
    
    for ( let i = 0 ; i <= n_x ; i++ )
    {
        chartData_init[i+1] = [] ;
        chartData_init[i+1][0] = x[i] ;
    }
    
    return chartData_init ;
}


function drawChart()
{
    for ( let i = 0 ; i <= n_x ; i++ )
    {
        chartData[i+1][1] = z1[i] ;
        chartData[i+1][2] = z2[i] ;
    }

    let dataTable = google.visualization.arrayToDataTable(chartData) ;
    
    const pct_formatter = new google.visualization.NumberFormat
                              ( { fractionDigits : 3 , pattern : '#.#%' } ) ;
    
    pct_formatter.format( dataTable , 0 ) ;
    pct_formatter.format( dataTable , 1 ) ;
    pct_formatter.format( dataTable , 2 ) ;

    const dispArea = document.getElementById('div_chart') ;
    let chart = new google.visualization.LineChart(dispArea) ;
    chart.draw( dataTable , chartOptions ) ;
}


function get_slider_label( slider_header , slider_value )
{
    const slider_label = "<b>" + slider_header + " = " + slider_value + "\%</b>" ;
    return slider_label ;
}


function slider_oninput( slider_header , slider_value , slider_value_display_area , which_slider )
{
    if ( ( which_slider != 1 ) && ( which_slider != 2 ) )
    {
        alert('slider_oninput:\nBad programmatic error:\nUnrecognized slider number ' + which_slider) ;
        return ;
    }
    
    slider_label = get_slider_label( slider_header , slider_value ) ;
    slider_value_display_area.innerHTML = slider_label ;
    
    if ( which_slider == 1 )
    {
        y1 = slider_value / max_Y ;
    }
    if ( which_slider == 2 )
    {
        y2 = slider_value / max_Y ;
    }
    
    z1 = fctn_z1( y1 , y2 ) ;
    z2 = fctn_z2( y1 , y2 ) ;
    
    drawChart() ;
}


const n_x = 1000 ;

const x_and_t = get_x_and_t(n_x) ;
const x     = x_and_t.x ;
const t     = x_and_t.t ;
const t_inv = x_and_t.t_inv ;

const max_Y = 100 ;
const step_Y = 0.1 ;

let Y1 = null ;
let Y2 = null ;

let fctn_z1 = null ;
let fctn_z2 = null ;

const chartOptions_init = init_chartOptions() ;
let chartOptions = null ;

switch (direction)
{
    case "from_TPR_FPR_to_pTPR_pFNR" :
        chartOptions = setup_from_TPR_FPR_to_pTPR_pFNR(chartOptions_init) ;
        Y1 = 80 ;
        Y2 = 10 ;
        fctn_z1 = h1 ;
        fctn_z2 = h2 ;
        break ;
    case "from_pTPR_pFNR_to_TPR_FPR" :
        chartOptions = setup_from_pTPR_pFNR_to_TPR_FPR(chartOptions_init) ;
        Y1 = 80 ;
        Y2 = 10 ;
        fctn_z1 = h1 ;
        fctn_z2 = h2 ;
        break ;
    case "from_TPR_TNR_to_PPV_NPV" :
        chartOptions = setup_from_TPR_TNR_to_PPV_NPV(chartOptions_init) ;
        Y1 = 80 ;
        Y2 = 90 ;
        fctn_z1 = k1 ;
        fctn_z2 = k2 ;
        break ;
    case "from_PPV_NPV_to_TPR_TNR" :
        chartOptions = setup_from_PPV_NPV_to_TPR_TNR(chartOptions_init) ;
        Y1 = 80 ;
        Y2 = 90 ;
        fctn_z1 = k1 ;
        fctn_z2 = k2 ;
        break ;
    default :
        alert("Unrecognized direction [" + direction + "]") ;
}

let y1 = Y1 / max_Y ;
let y2 = Y2 / max_Y ;

let z1 = fctn_z1( y1 , y2 ) ;
let z2 = fctn_z2( y1 , y2 ) ;

document.title = chartOptions.title ;

let chartData = init_chartData() ;

document.getElementById("span_title").setAttribute( "style", "white-space: pre;" ) ;
document.getElementById("span_title").textContent = "Metrics of binary classifier performance:\n" + chartOptions.title ;
document.getElementById("input_slider1").max = max_Y ;
document.getElementById("input_slider2").max = max_Y ;
document.getElementById("input_slider1").step = step_Y ;
document.getElementById("input_slider2").step = step_Y ;
document.getElementById("input_slider1").value = Y1 ;
document.getElementById("input_slider2").value = Y2 ;

let input_slider1 = document.getElementById("input_slider1") ;
let value_slider1 = document.getElementById("value_slider1") ;
value_slider1.innerHTML = get_slider_label( chartOptions.my_options.sliderHdr[0] , input_slider1.value ) ;
input_slider1.oninput = function() { slider_oninput( chartOptions.my_options.sliderHdr[0] , input_slider1.value , value_slider1 , 1 ) ; } ;

let input_slider2 = document.getElementById("input_slider2") ;
let value_slider2 = document.getElementById("value_slider2") ;
value_slider2.innerHTML = get_slider_label( chartOptions.my_options.sliderHdr[1] , input_slider2.value ) ;
input_slider2.oninput = function() { slider_oninput( chartOptions.my_options.sliderHdr[1] , input_slider2.value , value_slider2 , 2 ) ; } ;
