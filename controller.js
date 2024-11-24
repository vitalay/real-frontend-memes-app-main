class Controller {
    constructor() {
        this.model = new Model({
            onMemesChange: this.handleModleMemesChange,
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
            onTextTopChange: this.handleModelTextTopChange,
            onTextBottomChange: this.handleModelTextBottomChange
        });

        this.view = new View({
            onMemeChange: this.handleViewMemeChange,
            onTextTopChange: this.handleViewTextTopChange,
            onTextBottomChange: this.handleViewTextBottomChange
        });

        this.api = new API();
    }

    init() {
        this.api.getMemes()
            .then(data => {
                const memes = data.data.memes;
                this.model.setMemes(memes);
            });
    }

    handleModleMemesChange = () => {
        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());
    } 

    handleModelCurrentMemeIdChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleModelTextTopChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleModelTextBottomChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleViewMemeChange = (id) => {
        this.model.setCurrentMemeId(id);
    }

    handleViewTextTopChange = (text) => {
        // проверка на количество символов
        
        this.model.setTextTop(text);
    }

    handleViewTextBottomChange = (text) => {
        // проверка на количество символов
        
        this.model.setTextBottom(text);
    }
}