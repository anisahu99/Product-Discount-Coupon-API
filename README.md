# Product Discount API

An API to generate, validate, and manage unique, time-bound discount coupons for products.

## Features

- Generate a unique discount coupon for a product.
- Validate the coupon for a specific user and product.
- Log all requests to a mock database.
- Error handling for invalid or expired coupons.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- Postman or any API testing tool.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/anisahu99/Product-Discount-Coupon-API.git
   cd <Bargenix_Animesh_Sahu_Backend>

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
```

The server will start at `http://localhost:7000`.

---

## API Endpoints

#### 1. **Generate the coupon**
- **URL:** `POST /api/users/register`
- **Description:** Generate a new coupon specific for user and product.
- **Request Body:**
    ```json
    {
        "productId": "1",
          "userId": "1"
    }
    ```
- **Request Body:**
```json
    {
    "message": "Coupon generated successfully",
    "coupon": {
        "id": "0f8fd40e-144e-4c42-84f2-7f70e148220d",
        "productId": "1",
        "userId": "1",
        "code": "DISCOUNT-64138957-1786-45aa-87dd-e09f2944f187",
        "expiresAt": 1735279025224
      }
  }
  ```

#### 2. **Validate the coupon**
- **URL:** `POST /api/coupons/validate`
- **Description:** validate a coupon specific for user and product.
- **Request Body:**
    ```json
    {
  "code": "DISCOUNT-64138957-1786-45aa-87dd-e09f2944f187",
  "productId": "1",
  "userId": "1"
}
    ```
- **Request Body:**
- **Valid Coupon:**
```json
    {
    "message": "Coupon is valid",
    "coupon": {
        "id": "0f8fd40e-144e-4c42-84f2-7f70e148220d",
        "productId": "1",
        "userId": "1",
        "code": "DISCOUNT-64138957-1786-45aa-87dd-e09f2944f187",
        "expiresAt": 1735279025224
    }
}
 ```
- **Invalid Coupon:**
```
{
  "message": "Invalid coupon"
}
  ```
- **Expired Coupon:**
```
{
  "message": "Coupon has expired"
}
  ```
