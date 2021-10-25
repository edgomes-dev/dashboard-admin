import { Chart } from '../charts'
import hello from '../../assets/person.svg'
import './styles.css'

export const Main = () => 
{
	return (
		<main>
			<div className="main-container">
				<div className="main-title">
					<img src={hello} alt="Hello" />
					<div className="main-greeting">
						<h1>olá Ed</h1>
						<p>Bem vindo ao seu painel</p>
					</div>
				</div>

				<div className="main-cards">
					<div className="card">
						<i className="fa fa-file-text fa-2x text-ligthblue" />
						<div className="card-inner">
							<p className="text-primary-p">Número de pedidos</p>
							<span className="font-bold text-title">578</span>
						</div>
					</div>

					<div className="card">
						<i className="fa fa-money fa-2x text-red" />
						<div className="card-inner">
							<p className="text-primary-p">Pagamentos</p>
							<span className="font-bold text-title">R$2.467</span>
						</div>
					</div>


					<div className="card">
						<i className="fa fa-archive fa-2x text-yellow" />
						<div className="card-inner">
							<p className="text-primary-p">Números de produtos</p>
							<span className="font-bold text-title">670</span>
						</div>
					</div>


					<div className="card">
						<i className="fa fa-bars fa-2x text-green" />
						<div className="card-inner">
							<p className="text-primary-p">Categorias</p>
							<span className="font-bold text-title">40</span>
						</div>
					</div>
				</div>

				<div className="charts">
					<div className="charts-left">
						<div className="charts-left-title">
							<div>
								<h1>Daily Reports</h1>
								<p>Ubatuba, São Paulo, BR</p>
							</div>
							<i className="fa fa-usd" />
						</div>
						<Chart />
					</div>

					<div className="charts-right">
						<div className="charts-right-title">
							<div>
								<h1>Daily Reports</h1>
								<p>Ubatuba, São Paulo, BR</p>
							</div>
							<i className="fa fa-area-chart" />
						</div>

						<div className="charts-right-cards">
							<div className="card1">
								<h2>Lucros</h2>
								<p>R$2500</p>
							</div>

							<div className="card2">
								<h2>Pagamentos</h2>
								<p>R$250,00</p>
							</div>

							<div className="card3">
								<h2>Custos de hospedagem</h2>
								<p>R$430,00</p>
							</div>

							<div className="card4">
								<h2>Banco de dados</h2>
								<p>R$180,00</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}