const deleteProduct = async (btn) => {
  const prodId = btn.parentNode.querySelector('[name="productId"]').value;
  const csrf = btn.parentNode.querySelector('[name="_csrf"]').value;

  const productElement = btn.closest("article");

  try {
    const response = await fetch(`/admin/product/${prodId}`, {
      method: "DELETE",
      headers: {
        "csrf-token": csrf,
      },
    });

    const data = await response.json();
    productElement.parentNode.removeChild(productElement);
  } catch (err) {
    console.log(err.message);
  }
};
