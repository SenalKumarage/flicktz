**Get public feed**
----
  Returns array of image data.

* **URL**

  /api/public-feed

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
            "thumbnail": "https://live.staticflickr.com/65535/48573380581_1d486cd929_n.jpg",
            "fullImage": "https://live.staticflickr.com/65535/48573380581_1d486cd929_z.jpg"
        },
        {
            "thumbnail": "https://live.staticflickr.com/65535/48573380991_dea2d56203_n.jpg",
            "fullImage": "https://live.staticflickr.com/65535/48573380991_dea2d56203_z.jpg"
        }
    ]
    ```

-----

**Search images**
----
  Returns array of image data. Should pass a comma separated string as a url parameter containing tag names need to search.

* **URL**

  /api/search

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `text=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
            "thumbnail": "https://live.staticflickr.com/65535/48573380581_1d486cd929_n.jpg",
            "fullImage": "https://live.staticflickr.com/65535/48573380581_1d486cd929_z.jpg"
        },
        {
            "thumbnail": "https://live.staticflickr.com/65535/48573380991_dea2d56203_n.jpg",
            "fullImage": "https://live.staticflickr.com/65535/48573380991_dea2d56203_z.jpg"
        }
    ]
    ```
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ status: 400, message: 'Parameter text is not present' }`