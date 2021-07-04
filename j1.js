$.get("https://api.exchangeratesapi.io/latest",function(data){
console.log(data);
$("#coin").append(
    `
    <div class="card" style="width: 300px;display: inline-block !important">
        <div class="card-body">
            <h3 class="card-title">ערך מטבע</h3>
            <p>ערך השקל:${data.rates.ILS}</p>
        </div>
    </div>

    <div class="card" style="width: 300px; display:inline-block !important">
        <div class="card-body">
            <h3 class="card-title">ערך מטבע</h3>
            <p>ערך הדולר:${data.rates.USD}</p>
        </div>
    </div>
    `
)
})

$.get("http://jsonplaceholder.typicode.com/posts/1",function(data){
console.log(data);
$("#title").append(
    `
    <h3 class="display-3">title: ${data.title}</h3>
    `
)
})