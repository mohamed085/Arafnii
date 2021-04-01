<template>
  <div>
    <div class="fixedNav">
      <Nav></Nav>
    </div>

    <section>
      <div class="row">
        <div class="col-lg-3">
          <sidebar></sidebar>
        </div><!-- sidebar -->

        <div class="col-9">
            <div class="central-meta">
              <div class="editing-info">
                <h5 class="f-title"><i class="ti-info-alt"></i> Edit Basic Information</h5>
                <form method="post">
                  <div class="form-group half">
                    <input type="text" id="input" required="required"/>
                    <label class="control-label" for="input">First Name</label><i class="mtrl-select"></i>
                  </div>
                  <div class="form-group half">
                    <input type="text" required="required"/>
                    <label class="control-label" for="input">Last Name</label><i class="mtrl-select"></i>
                  </div>
                  <div class="form-group">
                    <input type="text" required="required"/>
                    <label class="control-label" for="input"><a href="https://wpkixx.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4b0e262a22270b">[email&#160;protected]</a></label><i class="mtrl-select"></i>
                  </div>
                  <div class="form-group">
                    <input type="text" required="required"/>
                    <label class="control-label" for="input">Phone No.</label><i class="mtrl-select"></i>
                  </div>
                  <div class="form-group">
                    <input type="text" required="required"/>
                    <label class="control-label" for="input">City</label><i class="mtrl-select"></i>
                  </div>
                  <div class="form-group">
                    <textarea rows="4" id="textarea" required="required"></textarea>
                    <label class="control-label" for="textarea">About Me</label><i class="mtrl-select"></i>
                  </div>
                  <div class="submit-btns">
                    <button type="button" class="mtr-btn"><span>Cancel</span></button>
                    <button type="button" class="mtr-btn"><span>Update</span></button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </section>


  </div>

</template>

<script>
export default {
  name: "setting"
}
</script>

<style scoped>

</style>
