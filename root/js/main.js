// ============================ get JSON data
const getJSON = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response);
        } else {
            console.log('Error: ', xhr.response);
        }
    };
    xhr.send();
};

// ============================ new content block with data from json file
const displayData = (data) => {
    let carList = data.reduce((list, item, index) => {
        const currentItem = `<div class="col-sm-6 col-xs-12">
                                 <div id="json_content_block">
                                    <a href="#" targer="_blank">
                                        <h3>${item.Name}</h3>
                                    </a>
                                    <p class="price">${item.Price}</p>
                                    <img width="100%" height="auto" src="img/99b0164a-089e-400b-9b89-42718e30db4a.jpg" alt="mini cupper">
                                    <p><span class="bold">Retailer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ${item.Retailer}</p>
                                    <p><span class="bold">Kilometres:&nbsp;&nbsp;&nbsp;&nbsp;</span> ${item.Kilometres}</p>
                                    <p><span class="bold">Transmission: </span> ${item.Transmission}</p>
                                    <p><span class="bold">Exterior:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ${item.Exterior}</p>
                                    <p class="interior"><span class="bold">Interior:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ${item.Interior}</p>
                                    <p><span class="bold">VIN:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ${item.VIN}</p>
                                    <p class="drive_train"><span class="bold">DriveTrain:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ${item.DriveTrain}</p>
                                    <button>View Details</button>
                                    <button>Book Test Drive</button>
                                </div>
                            </div>`;
        list += currentItem;
        return list;
    }, '');

    document.getElementById("json_data").innerHTML = carList;
};

// ============================ JSON url...
const onLoad = async () => {
    await getJSON(`https://raw.githubusercontent.com/RichmondDay/public/master/test_vehicle_inventory_data.json`, displayData);
};

// ============================ on load function
window.onload = onLoad();

// ============================ Video setings
$(function () {
    $("#video").videoPopup({
        autoplay: 1,
        width: 1000
    });
});
