$.get('https://jsonplaceholder.typicode.com/users', function(users) {
  const mappedData = users.map(user => ({
    email: user.email,
    companyName: user.company.name
  }));
  console.log(mappedData);
})


$.get('https://jsonplaceholder.typicode.com/users', function(users) {
    let zip = users.filter(u => u.address.zipcode.startsWith("5"))
    console.log(zip);
})


$.get('https://jsonplaceholder.typicode.com/users', function(users) {
    let zip = users.filter(u => u.address.zipcode.startsWith("5")).map(u=> u.id)
    console.log(zip);
})


$.get ('https://jsonplaceholder.typicode.com/users', function (users){
  let nameC = users.filter (u=> u.name.startsWith("C"))
  console.log (nameC)
})


$.get ('https://jsonplaceholder.typicode.com/users', function(users){
    let newCity = users.every (u=> u.address.city === "South Christy")
    console.log(newCity)
})


$.get('https://jsonplaceholder.typicode.com/users', function(users) {
    let usersWithSuite = users.filter(u => u.address.suite === "Apt. 950");
        let companyName = usersWithSuite.map(u => u.company.name);
        console.log(companyName);
});




$.get('https://jsonplaceholder.typicode.com/users', function(users) {
  users.forEach(userInfo);
});
function userInfo(user) {
  console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
}



