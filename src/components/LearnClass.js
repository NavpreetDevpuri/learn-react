import React from "react";
class LearnClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "state color",
            count: 0,
            isDeleted: false,
            username: "",
            age: null,
            errormessage: "",
            shouldAlert: true,
            language: "english",
        };
        this.vars = { count: 0 };
        if (this.state.language === "hindi") {
            if (this.state.shouldAlert)
                alert("0. constructor(): sbse pehele ham");
        } else if (this.state.shouldAlert)
            alert("0. constructor(): i am at first");
    }
    changeColor = () => {
        this.setState({ color: "Changed color: " + this.vars.count });
    };
    shoot(a) {
        if (this.state.language === "hindi")
            if (this.state.shouldAlert) alert(a);
            else alert(a);
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = "";
        if (val !== "" && !Number(val)) {
            if (this.state.language === "hindi")
                err = <strong>Oye age number chahiye mereko</strong>;
            else err = <strong>Your age must be a number</strong>;
        }
        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
        this.setState({ username: nam });
        this.setState({ age: val });
    };
    mySubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.language === "hindi")
            alert("Kardiya na submit " + this.state.username);
        else alert("You are submitting " + this.state.username);
        let age = this.state.age;
        if (!Number(age)) {
            if (this.state.language === "hindi")
                alert("Oye age number chahiye mereko");
            else alert("Your age must be a number");
        }
    };
    static getDerivedStateFromProps(props, state) {
        if (state.shouldAlert)
            if (state.language === "hindi") {
                alert(
                    "1. getDerivedStateFromProps(): me tumko bta rha hu before render(). count  " +
                        state.count +
                        " h or ha ham kisi v prop ki value return krte h, sirf jinko change krna h."
                );
                return {
                    color:
                        "1. getDerivedStateFromProps(): Ham krte h change value.",
                };
            } else {
                alert(
                    "1. getDerivedStateFromProps(): i am telling you before render(). count  is " +
                        state.count +
                        " or i return prop values dictionary those you want to update"
                );
                return {
                    color:
                        "1. getDerivedStateFromProps(): i can change prop values",
                };
            }
    }
    componentDidMount() {
        if (this.state.shouldAlert)
            if (this.state.language === "hindi")
                alert(
                    "2.1. componentDidMount(): me sirf 1st render ke vad chalta hu, or ha timer lga diya h thik 120 seconds vad hoga kuch change"
                );
            else
                alert(
                    "2.1. componentDidMount(): i just run after 1st render, i started a timer, after 120 seconds it will change something"
                );
        setTimeout(() => {
            this.vars.count = 369;
            if (this.state.language === "hindi")
                this.props.brand.model =
                    "2.1. componentDidMount(): bola tha kuch change hoga... dekho count 369 kar diya";
            else
                this.props.brand.model =
                    "2.1. componentDidMount(): i told u something is gonna change... i changed count to 369.";
            this.setState({ count: this.vars.count });
        }, 120000);
    }
    shouldComponentUpdate() {
        if (this.vars.count < 10) {
            if (this.state.shouldAlert)
                if (this.state.language === "hindi") {
                    alert(
                        "3. shouldComponentUpdate(): hmari mrji k render krna h ja nhi. or ham sirf render krna start krge pehele count ko 10 tak le k jayo"
                    );
                    alert(
                        "3. shouldComponentUpdate(): Notice kiya me aabi v hindi bol rha hu... aise hi hota h. hm purani values se run hote h 1 var. krege new values use mgr agli var se"
                    );
                } else {
                    alert(
                        "3. shouldComponentUpdate(): it's my choice whether to run render() or not. if u want to start render() then make count more than 10."
                    );
                    alert(
                        "3. shouldComponentUpdate(): did you Notice that i still speaking english ... i run whith old values for 1st time. i will use new values from next call"
                    );
                }
            return false;
        } else {
            if (this.state.shouldAlert)
                if (this.state.language === "hindi") {
                    alert(
                        "3. shouldComponentUpdate(): kar diya count ko 10 se upr. shabash"
                    );
                } else {
                    alert(
                        "3. shouldComponentUpdate(): u made count more than 10. good"
                    );
                }
            return true;
        }
    }
    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.shouldAlert)
                if (this.state.language === "hindi")
                    alert(
                        "4. componentDidUpdate(): ham call hoge har render ke vad."
                    );
                else
                    alert(
                        "4. componentDidUpdate(): i will call after every render()"
                    );
        }, 1000);
    }
    render() {
        if (this.state.shouldAlert)
            if (this.state.language === "hindi")
                alert(
                    "2. render(): Ham krte h render jo dikhana h is Component pe. or hmare pehele getDerivedStateFromProps() call huya. "
                );
            else
                alert(
                    "2. render(): i handle what to show on webpage at the place of this component. just before me getDerivedStateFromProps() was called "
                );
        let header = "";
        if (this.state.username) {
            header = (
                <h1>
                    Hello {this.state.username} {this.state.age}
                </h1>
            );
        } else {
            header =
                this.state.language === "hindi" ? (
                    <h1>Oye apna nam to likhle</h1>
                ) : (
                    <h1>Type your name</h1>
                );
        }

        return (
            <div>
                {!this.state.isDeleted && (
                    <DelMe language={this.state.language} />
                )}
                {!this.state.isDeleted && (
                    <button
                        type="button"
                        onClick={(event) => {
                            console.log(event);
                            this.setState({ isDeleted: true });
                        }}
                    >
                        {this.state.language === "hindi"
                            ? "delete uprvala"
                            : "delete above"}{" "}
                        {this.vars.count}
                    </button>
                )}
                <h2>this.state.color</h2>
                <p> = {this.state.color}</p>
                <h2>this.props.color</h2>
                <p> = {this.props.color}</p>
                <h2>this.props.brand.model </h2>
                <p>= {this.props.brand.model}!</p>
                <button type="button" onClick={this.changeColor}>
                    Change state color {this.vars.count}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        this.vars.count = 13;
                        this.setState({ count: this.vars.count });
                    }}
                >
                    make count = 13
                </button>

                <br></br>
                <button
                    type="button"
                    onClick={this.shoot("argument of unbinded vala")}
                >
                    {this.state.language === "hindi"
                        ? "shoot jo binded nhi h mtlv unbinded h"
                        : "shoot, which is not binded means its unbinded"}
                </button>
                <br></br>
                <button
                    type="button"
                    onClick={this.shoot.bind(this, "argument of binded vala")}
                >
                    {this.state.language === "hindi"
                        ? "Shoot jo binded h"
                        : "shoot, which is binded"}
                </button>
                <br></br>
                <form onSubmit={this.mySubmitHandler}>
                    {header}
                    <p>Enter your name:</p>
                    <input type="text" onChange={this.myChangeHandler} />
                    <p>Enter your age:</p>
                    <input
                        type="text"
                        name="age"
                        onChange={this.myChangeHandler}
                    />
                    {this.state.errormessage}
                </form>
                <button
                    type="button"
                    onClick={() => {
                        if (this.state.shouldAlert)
                            this.setState({ shouldAlert: false });
                        else this.setState({ shouldAlert: true });
                    }}
                >
                    {this.state.shouldAlert
                        ? "Stop alert. shouldAlert: true"
                        : "Start alert. shouldAlert: false"}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (this.state.language === "english")
                            this.setState({ language: "hindi" });
                        else this.setState({ language: "english" });
                    }}
                >
                    {this.state.language === "english"
                        ? "Changee language to Hindi"
                        : "Changee language to English"}
                </button>
            </div>
        );
    }
}

class DelMe extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.language === "hindi"
                        ? "Himat h to delete krk dekhle!"
                        : "Delete me! If you can."}
                </h1>
            </div>
        );
    }
}

export default LearnClass;
