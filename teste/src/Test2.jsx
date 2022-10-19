import React, { Component } from "react";

class Test2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nInputs: [""],
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              nInputs: [...this.state.nInputs, ""],
            });

            console.log(this.state.nInputs);
          }}
        >
          Adicionar campo
        </button>

        {this.state.nInputs.map((el, index) => (
          <div
            style={{
              display: "flex",
              fleDirection: "column",
            }}
          >
            <input
              value={el}
              onChange={(event) => {
                this.state.nInputs[index] = event.target.value;
                this.setState({
                  nInputs: [...this.state.nInputs],
                });

                console.log(this.state.nInputs);
              }}
              placeholder={"id pneu" + (index + 1)}
              key={index}
            />

            <button
              onClick={() => {
                this.setState({
                  nInputs: [
                    ...this.state.nInputs.filter(
                      (_, position) => index != position
                    ),
                  ],
                });

                console.log(this.state.nInputs);
              }}
            >
              Excluir
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default Test2;
