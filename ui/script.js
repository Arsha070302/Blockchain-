const greetingsList = {
    0: 'Hello world!',
    1: 'Good morning!',
    2: 'Greetings!',
    3: 'Hi there!',
    4: 'Welcome!'
};

function changeGreetings() {
    const keys = Object.keys(greetingsList);  // Get all keys of the greetingsList object
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomGreeting = greetingsList[keys[randomIndex]];  // Use the random index to get a greeting
    document.getElementById('greetingTxt').textContent = randomGreeting;
}

function getCount() {
    const randomIndex = Math.floor(Math.random() * 1000);
    document.getElementById('VisitorCountTxt').textContent = "Visitor Count = " + randomIndex.toString();
    console.log(randomIndex);
}
