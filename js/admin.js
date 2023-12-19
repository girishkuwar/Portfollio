if (localStorage.getItem("user")) {

    fetch("https://portfoliio.up.railway.app/api/collections/users_meassage/records").then(
        res => {
            res.json().then(
                data => {
                    console.log(data);
                    if (data.items.length > 0) {
                        var temp = "";
                        data.items.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td>" + itemData.name + "</td>";
                            temp += "<td>" + itemData.phone + "</td>";
                            temp += "<td>" + itemData.email + "</td>";
                            temp += "<td>" + itemData.subject + "</td>";
                            temp += "<td>" + itemData.msg + "</td></tr>";
                        });
                        document.getElementById('data').innerHTML = temp;
                    }
                }
            )
        }
    )
} else {
    window.location.href = "/";
}

const exit = () => {
    localStorage.removeItem("user");
    window.location.reload();
}