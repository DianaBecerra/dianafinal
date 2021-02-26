import React, { Component } from 'react';


class App extends Component {
    constructor() {
        super();
        this.state = {
        
            tasks: [],
           
        }
    }

    
    componentDidMount() {
        this.fetchTasks();
      }
    
      fetchTasks() {
        fetch('/api/tasks')
          .then(res => res.json())
          .then(data => {
            
            this.setState({tasks: data});
            console.log(this.state.tasks);
          });
      }

    //  const getfiltro = async () =>{
      //  const res = await axios.get(URL+'/'+texto)
        //setListaHoteles(res.data)
     // }
      //const refresh = () =>{
        //get()
       // setBuscar('')  }
      //codigo
    //const buscando = () => {
      //  setListaHotel(filtro()) }

    
    render() {
        return (
            <div>
                <nav className="light-blue darken-4" >
                    <div className="container">
                        <a className="brand-logo">AVIATUR</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s4">
                            <div className="card" >
                                <div className="card-content">
                                    <form >
                                        <div className="row">
                                            <div className="input-field col s10">
                                                <h5> <i class="material-icons">hotels</i>Hoteles</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-fiel col s12">
                                                
                                                
                                            <input type="text" placeholder="Buscar hotel" ></input>

                                               
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10">
                                                <h6 > Estrellas</h6>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-fiel col s10">
                                                <p>
                                                    <label>
                                                        <input class="with-gap" name="group1" type="radio" />
                                                        <span>sin filtar</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input class="with-gap" name="group1" type="radio" />
                                                        <span><i class="material-icons">star_border</i></span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input class="with-gap" name="group1" type="radio" />
                                                        <span><i class="material-icons">star_border</i><i class="material-icons">star_border</i></span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input class="with-gap" name="group1" type="radio" />
                                                        <span><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i></span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input class="with-gap" name="group1" type="radio" />
                                                        <span><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i></span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        <input class="with-gap" name="group1" type="radio" />
                                                        <span><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i><i class="material-icons">star_border</i></span>
                                                    </label>
                                                </p>
                                                
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        {
                    
                            this.state.tasks.map(taskss => {
                                return(
                                    <div className=" card col s8" >

                                    <div class="col m5"> <img src={taskss.image}></img>  </div>
                            
                                    <div class="col m5" > <h6 style={{ textAlign: "center", color: "blue" }} >{taskss.name}</h6><p>{taskss.stars}</p> <p>{taskss.amenities}</p></div>
                                    <div class="col m2"> <p style={{ fontWeight: "lighter", color: "#a2a2a2", textAlign: "center", fontSize: "14px" }}>Precio por Noche por habitacion</p>
                                        <h6 style={{ textAlign: "center", color: "#e59d24", fontWeight: "lighter" }}>ARC{taskss.price} </h6>
    
    
                                    </div>
                                     
                                </div>

                                )

                              
                            })
                        }


                        



                    </div>

                </div>

            </div>



        )
    }
}

export default App;