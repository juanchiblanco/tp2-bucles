for(let i=1; i<=500;i++){
    document.writeln(i)
    if(i%5===0){document.writeln(`-----------------------------------------------------`)}
    if(i%4===0){document.writeln(`(Múltiplo de 4)`)}
    if(i%9===0){document.writeln(`(Múltiplo de 9)`)}
    document.writeln(`<br>`)
}
