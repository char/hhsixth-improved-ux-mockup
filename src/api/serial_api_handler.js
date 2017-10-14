const mockup_names_lookup_table = {
    "0000000001": "Firstname Lastname (Student)",
    "0000000002": "Other Student (Student)"
}

let mockup_statuses = [];

function mockupRequest(serial) {
    return new Promise((resolve, reject) => {
        let result = {}

        if (serial in mockup_names_lookup_table) {
            result["name"] = mockup_names_lookup_table[serial];

            if (mockup_statuses.includes(serial)) {
                mockup_statuses.splice(mockup_statuses.indexOf(serial), 1);
                result["status"] = "signed_out";
            } else {
                mockup_statuses.push(serial);
                result["status"] = "signed_in";
            }
        } else {
            result["status"] = "invalid";
        }

        resolve(JSON.stringify(result));
    });
}

/*

// You'll need to return something like
// { "status": "signed_in", "name": "Firstname Lastname (Student)" }
function request(serial) {
    return new Promise((resolve, reject) => {
        let url = "https://my-public-subdomain.my-school/my-app/inout.php";
        let parameters = "serial=" + serial;
    
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);

        xhr.send(parameters);
    });
}
*/

function handleSerial(serial) {
    return mockupRequest(serial);
}

export default handleSerial;