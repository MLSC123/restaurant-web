import React from 'react'

export default function Footer () {
  return (
    <footer>
        <div className="m-5">
            <div className="row row-cols-1 row-cols-md-4">
            <div className="col">
                <div>
                    <h3>Logo</h3>
                    <p className="mb-30 footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta facilis
                        eos quia optio iusto odit atque eum tempore, quisquam officiis vero veniam hic,</p>
                </div>
            </div>
            <div className="col">
                <div className="">
                <h4>Quick Link</h4>
                <ul className="list-unstyled">
                    <li>
                    <a href="#" className="text-decoration-none">Home</a>
                    </li>
                    <li>
                    <a href="#" className="text-decoration-none">About Us</a>
                    </li>
                    <li>
                    <a href="#" className="text-decoration-none">Service</a>
                    </li>
                    <li>
                    <a href="#" className="text-decoration-none">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col">
                <div>
                <h4>Service</h4>
                <ul className="list-unstyled">
                    <li>
                    <a href="#" className="text-decoration-none">Marketing</a>
                    </li>
                    <li>
                    <a href="#" className="text-decoration-none">Branding</a>
                    </li>
                    <li>
                    <a href="#" className="text-decoration-none">Web Design</a>
                    </li>
                    <li>
                    <a href="#" className="text-decoration-none">Graphics Design</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col">
                <div>
                <h4>Address</h4>
                <ul className="list-unstyled">
                    <li>
                    <p>+017367234</p>
                    </li>
                    <li>
                    <p><a href="#">JhoneDoe@gmail.com</a>
                    </p>
                    </li>
                    <li>
                    <p>New York
                        City in New York State
                        New York City comprises 5 boroughs sitting where the Hudson River meets th</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="copyright">
                    <p>Developed and maintained by <a href="#" target="_blank">company</a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}
