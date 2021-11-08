import React, { Component } from 'react';

const url = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652956000'

class MyCart extends Component {
    render() {
        return (
            <div>
                <div className="ui cards">
                    <div className="ui card centered">
                        <div className="content">
                            <img alt='phone'
                                src={url}
                                className="ui mini right floated image"
                            />
                            <div className="header">iPhone 11</div>
                            <div className="meta">$ 600</div>
                            <div className="meta price">12 minutes</div>
                            <div className="description">
                                8G RAM, 16G memory
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <button className="ui green basic button">Buy</button>
                                <button className="ui red basic button">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCart;