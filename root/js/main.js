const getJSON = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(xhr.response);
      } else {
        console.log('Error: ', xhr.response);
      }
    };
    xhr.send();
};

const displayData = (data) => {
    let carList = data.reduce((list, item, index) => {
        const h3Class = index % 2 === 0 ? 'odd' : 'even'
        const currentItem = `<div class="col-md-6"><h3 class=${h3Class}>${item.Name}</h3></div>`;    
        list += currentItem
        return list;
    }, '');
    
    document.getElementById("json_data").innerHTML = carList;    
};

const onLoad = async () => {
 await getJSON(`https://raw.githubusercontent.com/RichmondDay/public/master/test_vehicle_inventory_data.json`, displayData);
};

window.onload = onLoad();