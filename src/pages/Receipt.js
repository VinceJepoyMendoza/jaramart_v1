import React from 'react'
import { useGlobalContext } from '../context'

const Receipt = () => {
  const { checkout } = useGlobalContext()
  const client = checkout.clientInfos

  // Dates
  const today = new Date()
  const dd = today.getDate()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  const taxRate = 5
  const cartTotal = parseFloat(checkout.total)
  let taxTotal = cartTotal * (taxRate / 100)
  const overAllTotal = cartTotal + taxTotal

  return (
    <section className='receipt'>
      <div className='receipt-content'>
        <div className='receipt-content__bill-from'>
          <article>
            <h3>Invoice</h3>
            <h4>Jaramart Limited</h4>
            <p>Andress Bonifacio St</p>
            <p>Biñan City, Province of Laguna</p>
            <p>Philippines</p>
            <p>4024</p>
          </article>
          <aside>
            <p>Due</p>
            <h2>${checkout.total}</h2>
          </aside>
        </div>
        <div className='receipt-content__bill-to'>
          <article>
            <small>
              <b>BILL TO:</b>
            </small>
            <h4>{`${client[0]} ${client[1]}` || `Javier Fernando`}</h4>
            <p>{client[2] || `Rolando R. Andaya Hwy`}</p>
            <p>{client[3] || `Ragay, Camarines Sur`}</p>
            <p>{client[4] || `Philippines`}</p>
            <p>{client[5] || `4410`}</p>
          </article>
          <aside>
            <small>
              <b>Invoice #</b>
            </small>
            <p>444444</p>
            <small>
              <b>Date</b>
            </small>
            <p>{`${String(dd).padStart(2, '0')}/${mm}/${yyyy}`}</p>
            <small>
              <b>Invoice due date</b>
            </small>
            <p>{`${String(dd + 5).padStart(2, '0')}/${mm}/${yyyy}`}</p>
          </aside>
        </div>
        <table className='receipt-content__items'>
          <tbody>
            <tr className='header'>
              <th>Items</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
            {/* {checkout.inCart?.map((item) => {
              const { title, price, amount, total, id } = item
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>${price}</td>
                  <td>{amount}</td>
                  <td>${total}</td>
                </tr>
              )
            })} */}
          </tbody>
        </table>
        <footer>
          <div>
            <h4>
              <b>Notes:</b>
            </h4>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              voluptatem aliquid earum mollitia explicabo natus quia culpa esse
              debitis dolor.
            </small>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Subtotal</b>
                </td>
                <td>${checkout.total}</td>
              </tr>
              <tr>
                <td>
                  <b>Tax rate</b>
                </td>
                <td>{taxRate}%</td>
              </tr>
              <tr>
                <td>
                  <b>Tax</b>
                </td>
                <td>${taxTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>${overAllTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </footer>
      </div>
    </section>
  )
}

export default Receipt
