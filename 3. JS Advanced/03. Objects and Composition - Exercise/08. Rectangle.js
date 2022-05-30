function solve(width, height, color) {
    let patternRect = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        },
    };
    let newColor =
        patternRect.color[0].toUpperCase() + patternRect.color.substring(1);
    patternRect.color = newColor;

    return patternRect;
}

solve();
