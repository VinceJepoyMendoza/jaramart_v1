import React from 'react'

const Receipt = () => {
  // Dates
  const today = new Date()
  const dd = today.getDate()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()

  return (
    <section className='receipt'>
      {/* <h2>Thank you for patronage</h2> */}
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
            <h2>$5000.00</h2>
          </aside>
        </div>
        <div className='receipt-content__bill-to'>
          <article>
            <small>
              <b>BILL TO:</b>
            </small>
            <h4>Javier Sta. Cruz</h4>
            <p>Rolando R. Andaya Hwy</p>
            <p>Ragay, Camarines Sur</p>
            <p>Philippines</p>
            <p>4410</p>
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
          <div className='primary-background'></div>
          <tr className='header'>
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</td>
            <td>$109.95</td>
            <td>3</td>
            <td>$329.85</td>
          </tr>
          <tr>
            <td>Mens Casual Premium Slim Fit T-Shirts</td>
            <td>$22.3</td>
            <td>3</td>
            <td>$66.9</td>
          </tr>
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
            <tr>
              <td>
                <b>Subtotal</b>
              </td>
              <td>$5000.00</td>
            </tr>
            <tr>
              <td>
                <b>Tax rate</b>
              </td>
              <td>00%</td>
            </tr>
            <tr>
              <td>
                <b>Tax</b>
              </td>
              <td>$00</td>
            </tr>
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>$5000.00</td>
            </tr>
          </table>
        </footer>
      </div>
    </section>
  )
}

export default Receipt
