function findElements() {

    let findHEXColor = /#([a-fA-F0-9]{3}){1,2}/g;
    let findPhoneNumber = /\+?\(?(38)?0\)?(50|68|96|97|98|67|66|95|99|63|73|93)(-|\s|)?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}\b/g;
    let findTagScript = /(<|%3C)script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)(\/|%2F)script[\s\S]*?(>|%3E)/g;

    let result = document.documentElement.innerHTML;

    let colors = result.match(findHEXColor);
    let numbers = result.match(findPhoneNumber);
    let scripts = result.match(findTagScript);
    
    alert(`Цвета в этом HTML: ${colors}`);
    alert(`Номера телефонов в этом HTML: ${numbers}`);
    alert(`Скрипты в этом HTML: ${scripts}`);
}
