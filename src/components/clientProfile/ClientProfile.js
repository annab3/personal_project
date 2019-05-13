import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editClient, editPets } from "../../ducks/authReducer";
import FileUpload from "../fileUpload/FileUpload";

class ClientProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit_client: {},
      edit: false,
      edit_pet: {}
    };
  }
  clickHandlerCancelUserEdit() {
    this.setState({ edit_client: {}, edit: false });
  }
  clickHandlerSubmitUserEdit() {
    if (this.props.client_picture !== "") {
      let edit_client = {
        ...this.state.edit_client,
        client_picture: this.props.pet_picture
      };
      this.props.editClient(edit_client);
    } else {
      this.props.editClient(this.state.edit_client);
    }

    this.setState({ edit_client: {}, edit: false });
  }
  clickHandlerCancelPetEdit() {
    this.setState({ edit_pet: {} });
  }
  clickHandlerSubmitPetEdit() {
    if (this.props.pet_picture !== "") {
      let edit_pet = {
        ...this.state.edit_pet,
        picture: this.props.pet_picture
      };
      this.props.editPets(edit_pet);
    } else {
      this.props.editPets(this.state.edit_pet);
    }
    this.setState({ edit_pet: {} });
  }
  render() {
    return (
      <div className="profile_container">
        <div className="client_profile_container">
          {!this.state.edit ? (
            <div>
              {this.props.client.client_picture ? (
                <img
                  className="profile_img"
                  src={this.props.client.client_picture}
                  alt={this.props.client.first_name}
                />
              ) : (
                <img
                  className="profile_img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
                  alt="nothing provided"
                />
              )}
              <h5>
                Name: {this.props.client.first_name}{" "}
                {this.props.client.last_name}
              </h5>
              <h5>Primary Phone#: {this.props.client.primary_number}</h5>
              <h5>Secondary Phone#: {this.props.client.secondary_number}</h5>
              <h5>Adress: {this.props.client.address}</h5>
              <h5>City: {this.props.client.city}</h5>
              <h5>State: {this.props.client.state}</h5>
              <h5>Zipcode: {this.props.client.zip}</h5>
              <button
                className="login_page-button"
                onClick={() =>
                  this.setState({ edit: true, edit_client: this.props.client })
                }
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <h5>
                Picture:
                <FileUpload />
              </h5>
              <h5>
                Name:
                <input
                  placeholder={this.props.client.first_name}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        first_name: e.target.value
                      }
                    })
                  }
                />
                <input
                  placeholder={this.props.client.last_name}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        last_name: e.target.value
                      }
                    })
                  }
                />
              </h5>
              <h5>
                Primary Phone#:
                <input
                  placeholder={this.props.client.primary_number}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        primary_number: e.target.value
                      }
                    })
                  }
                />
              </h5>
              <h5>
                Secondary Phone#:{" "}
                <input
                  placeholder={this.props.client.secondary_number}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        secondary_number: e.target.value
                      }
                    })
                  }
                />
              </h5>
              <h5>
                Adress:{" "}
                <input
                  placeholder={this.props.client.address}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        address: e.target.value
                      }
                    })
                  }
                />
              </h5>
              <h5>
                City:{" "}
                <input
                  placeholder={this.props.client.city}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        city: e.target.value
                      }
                    })
                  }
                />
              </h5>
              <h5>
                State:{" "}
                <input
                  placeholder={this.props.client.state}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        state: e.target.value
                      }
                    })
                  }
                />
              </h5>
              <h5>
                Zipcode:{" "}
                <input
                  placeholder={this.props.client.zip}
                  onChange={e =>
                    this.setState({
                      edit_client: {
                        ...this.state.edit_client,
                        zip: e.target.value
                      }
                    })
                  }
                />
              </h5>
              <div>
                <button
                  className="login_page-button"
                  onClick={() => this.clickHandlerCancelUserEdit()}
                >
                  cancel
                </button>
                <button
                  className="login_page-button"
                  onClick={() => this.clickHandlerSubmitUserEdit()}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="pet_profile_container">
          {this.props.pets.map((pet, index) => {
            if (
              this.state.edit_pet.dog_id &&
              this.state.edit_pet.dog_id === pet.dog_id
            ) {
              return (
                <div key={index}>
                  <h5>
                    Picture: <FileUpload />
                  </h5>
                  <h5>
                    Name:{" "}
                    <input
                      placeholder={pet.name}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            name: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Breed:{" "}
                    <input
                      placeholder={pet.breed}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            breed: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Birthday:{" "}
                    <input
                      placeholder={pet.birthday}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            birthday: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Weight (lbs):{" "}
                    <input
                      placeholder={pet.weight}
                      type="number"
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            weight: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Color:{" "}
                    <input
                      placeholder={pet.color}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            color: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Feeding:{" "}
                    <input
                      placeholder={pet.feeding}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            feeding: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <div>
                    <button
                      className="login_page-button"
                      onClick={() => this.clickHandlerCancelPetEdit()}
                    >
                      Cancel
                    </button>
                    <button
                      className="login_page-button"
                      onClick={() => this.clickHandlerSubmitPetEdit()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  {pet.picture ? (
                    <img
                      className="profile_img"
                      src={pet.picture}
                      alt={pet.name}
                    />
                  ) : (
                    <img
                      className="profile_img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
                      alt="nothing provided"
                    />
                  )}
                  <h5>Name: {pet.name}</h5>
                  <h5>Breed: {pet.breed}</h5>
                  <h5>Birthday: {pet.birthday}</h5>
                  <h5>Weight (lbs): {pet.weight}</h5>
                  <h5>Color: {pet.color}</h5>
                  <h5>Feeding: {pet.feeding}</h5>
                  <button
                    className="login_page-button"
                    onClick={() => this.setState({ edit_pet: pet })}
                  >
                    Edit
                  </button>
                </div>
              );
            }
          })}
          {/* map function over array of pets */}
          <Link to="/portal/add_dog">
            <button className="login_page-button">Add Pet</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client,
    pets: state.authReducer.pets,
    pet_picture: state.authReducer.pet_picture
  };
}

export default connect(
  mapStateToProps,
  { editClient, editPets }
)(ClientProfile);
