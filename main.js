model = await tf.loadModel('model//model.json')

//preprocessing the data before make a prediction.
//tamanho mínimo da caixa em volta do desenho.
const mbb = getMinBox()

//calculando a dpi da atual página
const dpi = window.devicePixelRatio

//extrai a imagem
const imgData  = canvas.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
                                                     (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.max.y) * dpi); 

function preprocess(imgData)
{
  retturn tf.tidy(()=>{
    //converte a imagem de data para tensor
    let tensor = tf.fromPixels(imgData, numChannels=1)
    //muda o tamanho para 28 x 28
    const resized = tf.image.resizeBilinear(tensor, [28, 28]).toFloat()
    //normaliza a imagem.
    const offset = tf.scalar(255.0);
    const normalized = tf.scalar(1.0).sub(resized.div(offset));
    //we add a dimension to get a batch shape
    const batched = normalized.expandDims(0)
    return batched
 })
} 
