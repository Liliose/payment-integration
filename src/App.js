import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.scss";
import button from '@material-ui/core/button';
function App() {
	const [amount, setAmount] = useState(0);

	const showModal = () => {
		document.querySelector(".payment-modal").classList.remove("d-none");
	}
	const hideModal = () => {
		document.querySelector(".payment-modal").classList.add("d-none");
	}
	return (
		<>
			<div className="app">
				<div className="app-contents">
					<form onSubmit={(e) => {e.preventDefault();showModal();}}>
						<div className="text-center mb-3" style={{color:"blue"}}>MAKE A ONE-TIME GIFT</div>
						<div className="row">
							<div className="col">
								<button type="button" onClick={()=> setAmount(100)}>100 RWF</button>
							</div>
							<div className="col">
								<button type="button"  onClick={()=> setAmount(250)}>250 RWF</button>
							</div>
							<div className="col">
								<button type="button" onClick={()=> setAmount(500)}>500 RWF</button>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<button type="button" onClick={()=> setAmount(1000)}>1000 RWF</button>
							</div>
							<div className="col">
								<button type="button" onClick={()=> setAmount(5000)}>5000 RWF</button>
							</div>
							<div className="col">
								<button type="button" onClick={()=> setAmount(9900)}>9900 RWF</button>
							</div>
						</div>
						<input className="input" type="text" onChange={event => setAmount(event.target.value)} value={(amount > 0)? amount : ''} placeholder="Name your own amount, maybe 25,000 rwf" required />
						<div className="text-right my-2">
							<input type="checkbox" required /> I will cover my transfer fees
						</div>
						<input type="submit" value="Donate" className="btn btn-submit-bg w-100" />
					</form>
				</div>
			</div>

			<div className="payment-modal d-none">
				<div className="modal-content pb-5 px-5 pt-2">
					<div className="text-right mb-3">
						<span onClick={hideModal}>&times;</span>
					</div>
					<button className="btn btn-primary mb-3">Pay With PayPal</button>
					<button className="btn btn-primary">Pay With MOMO</button>
				</div>
			</div>
		</>
	);
}

export default App;
