const inSertionSortButton = document.getElementById("insertion");

const inSertionSort = async () => {
    newArray.disabled = false;
  bubble2.disabled = true;
  selection.disabled = true;
  insertion.disabled = true;
  console.log("In insertion()");
  const ele = document.querySelectorAll(".divs");

  ele[0].style.background = "green";
  for (let i = 1; i < ele.length; i++) {
    console.log("In ith loop");
    let j = i - 1;
    let key = ele[i].style.height;

    ele[i].style.background = "blue";

    await waitforme(10);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      console.log("In while loop");
    
      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await waitforme(10);


      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "green";
      }
    }
    ele[j + 1].style.height = key;
   
    ele[i].style.background = "green";
  }
};

inSertionSortButton .addEventListener("click", inSertionSort);
