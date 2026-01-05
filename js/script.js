function setMood(mood)
{
    const messageElement = document.getElementById('message');
    const body = document.body;
    const content = document.querySelector('.content');
    let suggestion = '';
    let bodyBgColor = '#fff9db';
    let contentBgColor = '#fff0f6';
    switch (mood) {
        case 'happy':
            suggestion = 'Great! Keep spreading that joy. Maybe share a smile with someone today. 😊';
            bodyBgColor = '#fff9c4';
            contentBgColor = '#ffeb3b';
            break;
        case 'sad':
            suggestion = 'It\'s okay to feel sad. Take a moment to breathe and perhaps listen to your favorite song. 🌧️';
            bodyBgColor = '#e3f2fd'; 
            contentBgColor = '#bbdefb';
            break;
        case 'tired':
            suggestion = 'Rest is important. Try a short nap or a cup of tea to recharge. 😴';
            bodyBgColor = '#f3e5f5'; 
            contentBgColor = '#ce93d8'; 
            break;
        case 'stressed':
            suggestion = 'Stress happens. Step away for a walk or practice deep breathing. You\'ve got this! 🧘';
            bodyBgColor = '#ffebee'; 
            contentBgColor = '#ffcdd2';
            break;
        default:
            suggestion = 'Select a mood to get a suggestion!';
    }

    messageElement.textContent = suggestion;
    body.style.backgroundColor = bodyBgColor;
    content.style.backgroundColor = contentBgColor;
}
