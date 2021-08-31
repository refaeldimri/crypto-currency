import React from 'react'

const Coin = ({image, name, symbol, price, marketCap, priceChange, volume}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {
                        priceChange < 0 ? 
                            (<p className='priceChange-red'>{priceChange.toFixed(2)}%</p>)
                                :
                            (<p className='priceChange-green'>{priceChange.toFixed(2)}%</p>)
                        }
                        <p className='coin-market-cap'>Mkt cap: ${marketCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
