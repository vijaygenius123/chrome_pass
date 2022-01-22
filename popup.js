let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: loginAsUser,
    });

});


function loginAsUser() {


    console.log(window.location)

    const username = document.querySelector('input[name="userLoginId"]')
    const password = document.querySelector('input[name="password"]')

    username.value = ""
    username.dispatchEvent(new Event('change', {'bubbles': true}));

    password.value = ""
    password.dispatchEvent(new Event('change', {'bubbles': true}))

    document.querySelector('button[type="submit"]').click()
}
