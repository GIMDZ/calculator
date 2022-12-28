import '../styles/calculator.css'
import '../operations'
import React from 'react'

const ButtonGroup = () => {

    

  return (
    <div className="component-button-panel">
         <tbody className="actions">
						<tr>
							<td colspan="3"></td>
							<td>
								<button className="btn btn-op" data-value="(">
									(
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value=")">
									)
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="%">
									%
								</button>
							</td>
							<td>
								<button
									id="clear"
									className="btn btn-op"
									data-value="ce"
								>
									CE
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button className="btn btn-op" data-value="inv">
									Inv
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="sin">
									sin
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="ln">
									ln
								</button>
							</td>
							<td>
								<button className="btn" data-value="7">7</button>
							</td>
							<td>
								<button className="btn" data-value="8">8</button>
							</td>
							<td>
								<button className="btn" data-value="9">9</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="/">
									&#x00f7;
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button
									className="btn btn-op"
									data-value="3.14159265359"
								>
									&pi;
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="cos">
									cos
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="log">
									log
								</button>
							</td>
							<td>
								<button className="btn" data-value="4">4</button>
							</td>
							<td>
								<button className="btn" data-value="5">5</button>
							</td>
							<td>
								<button className="btn" data-value="6">6</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="*">
									&times;
								</button>
							</td>
						</tr>

						<tr>
							<td>
								<button className="btn btn-op" data-value="e">
									e
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="tan">
									tan
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="radic">
									&radic;
								</button>
							</td>
							<td>
								<button className="btn" data-value="3">3</button>
							</td>
							<td>
								<button className="btn" data-value="2">2</button>
							</td>
							<td>
								<button className="btn" data-value="1">1</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="-">
									-
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button className="btn btn-op" data-value="exp">
									EXP
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="x^2">
									x&#xb2;
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="**">
									x&#94;
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value=".">
									.
								</button>
							</td>
							<td>
								<button className="btn" data-value="0">0</button>
							</td>
							<td>
								<button
									id="equalTo"
									className="btn btn-op"
									data-value="="
								>
									=
								</button>
							</td>
							<td>
								<button className="btn btn-op" data-value="+">
									+
								</button>
							</td>
						</tr>
					</tbody>
        </div>
  )
}

export default ButtonGroup