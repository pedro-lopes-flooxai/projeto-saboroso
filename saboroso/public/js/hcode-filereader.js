class HcodeFilReader{

    constructor(inputEl, imgEl){

        this.inputEl = inputEl;
        this.imgEl = imgEl;

        this.InitInputEvent();

    }

    InitInputEvent(){
        docucument.querySelector(this.inputEl).addEventListener("change", e=>{

            this.reader(e.target.files[0]).then(result => {

                document.querySelector(this.imgEl).src = result ;

            });

        });
    }

    reader(file){

        return new Promise((resolve, reject)=>{

            let reader = new FileReader();

            reader.onload = function(){
    
                resolve(reader.result);
    
            }
    
            reader.readAsDataURL(file);
        

        });

        reader.onerror = function(){

            reader("Não foi possivel ler a imagem")

        }

        reader.readAsDataURL(file);
    }

}