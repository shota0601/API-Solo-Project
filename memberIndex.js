function get() {
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:3000/users", true);
    // レスポンスが返ってきた時の処理を記述 
    request.onload = function () {
    // レスポンスが返ってきた時の処理
    var data = this.response;
    const containerEl = document.querySelector('#newsfeed');
    const kaigyo = document.createElement('br');
    containerEl.append("メンバーの全件データを出力します")
    containerEl.append(kaigyo)
    containerEl.append("Id,firstName,lastName,age,rank")
    for(let i = 0; i<50 ;i++){
    //const containerEl = document.querySelector('#newsfeed');
    const textId = document.createElement('div');
    const kaigyo1 = document.createElement('br');
    containerEl.append(kaigyo1)
    textId.innerText = String(JSON.parse(data)[i].id) + "," + String(JSON.parse(data)[i].firstName) +"   ," + String( JSON.parse(data)[i].lastName) + "   ," + String(JSON.parse(data)[i].age) + "  ," + String(JSON.parse(data)[i].rank);
    containerEl.append(textId)
    }
    }
    // リクエストをURLに送信
    request.send();
}

function post() {
    var request = new XMLHttpRequest();
    request.open('Post', "http://localhost:3000/users", true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var firstname = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var rank = document.getElementById("rank").value;
    //request.body.firstName = firstname;
    //request.body.lastName = lastName;
    //request.body.age = age;
    //request.body.rank = rank;
    // レスポンスが返ってきた時の処理を記述 
    request.onload = function () {
    // レスポンスが返ってきた時の処理
    var data = this.response;
    const containerEl = document.querySelector('#newsfeed');
    const kaigyo = document.createElement('br');
    containerEl.append("下記メンバーの追加が完了しました")
    containerEl.append(kaigyo)
    containerEl.append("Id,firstName,lastName,age,rank")
    const textId = document.createElement('div');
    const kaigyo1 = document.createElement('br');
    containerEl.append(kaigyo1)
    textId.innerText = String(JSON.parse(data).id) + "," + String(JSON.parse(data).firstName) +"   ," + String( JSON.parse(data).lastName) + "   ," + String(JSON.parse(data).age) + "  ," + String(JSON.parse(data).rank);
    containerEl.append(textId)
    }
    // リクエストをURLに送信
    let json = JSON.stringify({
        "firstName": firstname,
        "lastName": lastName,
        "age": age,
        "rank": rank
    });
    request.send(json);
}

function patch() {
    var request = new XMLHttpRequest();
    var id = document.getElementById("id").value;
    var url = "http://localhost:3000/users"
    url = url +'/' + id;
    request.open('PATCH', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var firstname = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var rank = document.getElementById("rank").value;
    request.onload = function () {
    var data = this.response;
    const containerEl = document.querySelector('#newsfeed');
    const kaigyo = document.createElement('br');
    containerEl.append("更新が完了しました")
    containerEl.append(kaigyo)
    const textId = document.createElement('div');
    const textfirstName = document.createElement('div');
    const textlastName = document.createElement('div');
    const textage = document.createElement('div');
    const textrank = document.createElement('div');
    textId.innerText = "Id:" + String(JSON.parse(data).id);
    textfirstName.innerText = "firstName:" + String(JSON.parse(data).firstName);
    textlastName.innerText = "lastName:" + String(JSON.parse(data).lastName);
    textage.innerText = "age:" + String(JSON.parse(data).age);
    textrank.innerText = "rank:" + String(JSON.parse(data).rank);
    containerEl.append(textId)
    containerEl.append(textfirstName)
    containerEl.append(textlastName)
    containerEl.append(textage)
    containerEl.append(textrank)
    }
    // リクエストをURLに送信
    let json = JSON.stringify({
        "firstName": firstname,
        "lastName": lastName,
        "age": age,
        "rank": rank
    });
    request.send(json);
}

function Delete() {
    var request = new XMLHttpRequest();
    var id = document.getElementById("id").value;
    var url = "http://localhost:3000/users"
    url = url +'/' + id;
    console.log(url)
    request.open('DELETE', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = function () {
    }
    request.send();
    const containerEl = document.querySelector('#newsfeed');
    containerEl.append("削除が完了しました")
}