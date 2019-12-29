import appsusService from '../services/appsusService.js';

export default class AppsusHome extends React.Component {
    state = { bg: '' };



    componentDidMount = () => {
        this.loadBackground();
    }

    loadBackground = () => {
        appsusService.getBackground().then(bg => {
            this.setState({ bg }, () => this.changeBg())
        })

    }

    onChangeBg = (ev) => {
        const value = ev.target.value;
        this.setState(({ bg: value }), function () {
        })
        appsusService.setBackground(value);
    }

    changeBg = () => {
        document.body.style.backgroundImage = `url(${this.state.bg})`;
        this.setState({ bg:'' });
    }

    render() {
        return (
            <section className={'apsus-home'}>
                <div className={'search-bg-container'}>
                    <input className={'search-bg-input'} type="text" placeholder="Set Background URL"
                        value={this.state.bg} onChange={this.onChangeBg}>
                    </input>
                    <button className={'bg-btn'} onClick={this.changeBg}>Change</button>
                </div>
            </section>
        )
    }
}