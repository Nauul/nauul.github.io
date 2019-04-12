//preprocessing the data before make a prediction.
//tamanho mínimo da caixa em volta do desenho.
const mbb = getMinBox()

//calculando a dpi da atual página
const dpi = window.devicePixelRatio

//extrai a imagem
const imgData  = canvas.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
                                                     (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.max.y) * dpi); 

