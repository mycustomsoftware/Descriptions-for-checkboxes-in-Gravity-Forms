In order to create a description for each input, we must:
1. Get form ID. Usually, it’s inside the URL admin panel where you edit the form.

Example: https://www.example.com/wp-admin/admin.php?page=gf_edit_forms&id=123

Id is 123 in this case.

2. Get input ID. ID is 43 in this case

Example: 

<img width="371" height="157" alt="Screenshot 2025-12-02 at 23 12 15" src="https://github.com/user-attachments/assets/de174a74-db95-4622-b41c-c2758f3aafb7" />

```html
   <script>(()=>{
      const form_id='123'; // Replace 123 with your form id
      const input_id='43'; // Replace 43 with your input id
      const descriptions=[
    		"Description example for first checkbox",
    		"Description example for second checkbox",
    		"Description example for third checkbox",
      ];
      let a=function(A,_){A.insertAdjacentHTML('beforeend',_)},b=function(B,C=document){let _c=C.querySelectorAll(B);if(_c.length>1)return _c;return _c[0]},c=b(`#input_${form_id}_${input_id}`);descriptions.map((_a,_b)=>a(b('.gchoice',c)[_b],`<p>${_a}</p>`));
   })()
</script>
```

### Note: Make sure you provide one description for each radio option

3. Descriptions must be simple, just use brackets " before and after paragraph, and a comma between them, like in a code example:
4. Create a new “HTML Block” and paste the code there:

Example:

<img width="372" height="413" alt="image" src="https://github.com/user-attachments/assets/70dee420-140a-4bb7-9ae7-1c1b298bc5e3" />



5. Place this block after the checkboxes.

Example:

<img width="961" height="350" alt="image" src="https://github.com/user-attachments/assets/f9faa57c-34ed-42b8-b4b0-1c5dad3cac4c" />

6. Place the code in on the right side General -> Content:

Example:

<img width="361" height="285" alt="image" src="https://github.com/user-attachments/assets/5e8ac0d0-c006-4cd1-add3-e318e5676c3d" />

### Node: code that you paste inside “Content” must begin form “<script>” and end with “</script>”

7. On the right side, General -> Field Label must contain “YOURINPUTNAME input descriptions” where “YOURINPUTNAME” refers to your checkbox label
In my case, it’s “The answer is...”.

Example: The answer is... input descriptions

8. On the right side, “Advanced” -> “Visibility” must be marked as hidden.

Example:

<img width="359" height="352" alt="image" src="https://github.com/user-attachments/assets/7d2827bd-6ea0-452f-abc8-86b3c2226d2d" />

9. At the end, it must look like this:

<img width="960" height="340" alt="image" src="https://github.com/user-attachments/assets/8d471865-baf7-4c9f-b6aa-86c9a7bf981d" />

