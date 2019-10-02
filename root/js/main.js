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
        const h3Class = index % 2 === 0 ? 'odd' : 'even';
        const currentItem = `<div class="col-md-6">
                                <a href="#" targer="_blank">
                                    <h3>${item.Name}</h3>
                                </a>
                                <p>${item.Price}</p>
                                <img width="100%" height="auto" src="img/99b0164a-089e-400b-9b89-42718e30db4a.jpg" alt="mini cupper">
                                <p>${item.Retailer}</p>
                                <p>${item.Kilometres}</p>
                                <p>${item.Transmission}</p>
                                <p>${item.Exterior}</p>
                                <p>${item.Interior}</p>
                                <p>${item.VIN}</p>
                                <p>${item.DriveTrain}</p>
                                <button>View Details</button>
                                <button>Book Test Drive</button>
                            </div>`;    
        list += currentItem;
        return list;
    }, '');
    
    document.getElementById("json_data").innerHTML = carList;    
};

const onLoad = async () => {
 await getJSON(`https://raw.githubusercontent.com/RichmondDay/public/master/test_vehicle_inventory_data.json`, displayData);
};

window.onload = onLoad();