<template>
  <div class="wrap-content">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <FileUpload />
      <a-form-item label="Title" v-bind="validateInfos.name">
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="Description" v-bind="validateInfos['sub.name']">
        <a-textarea v-model:value="modelRef.sub.name" />
      </a-form-item>
      <a-form-item label="Price" v-bind="validateInfos['sub.name']">
        <a-input v-model.number:value="modelRef.sub.name" />
      </a-form-item>
      <a-form-item label="Continents" v-bind="validateInfos['sub.name']">
        <a-select
          v-model:value="value"
          show-search
          placeholder="Select a person"
          :options="Continents"
        ></a-select>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click.prevent="onSubmit">Submit</a-button>
        <a-button style="margin-left: 10px" @click="reset">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive, ref, toRaw } from "vue";
import { Form } from "ant-design-vue";
import FileUpload from "../../components/FileUpload.vue";
const useForm = Form.useForm;
export default {
  name: "ProductPage",
  components: {
    FileUpload,
  },
  setup() {
    const options = ref([
      {
        value: "jack",
        label: "Jack",
      },
      {
        value: "lucy",
        label: "Lucy",
      },
      {
        value: "tom",
        label: "Tom",
      },
    ]);

    const Continents = ref([
      { key: 1, value: "Africa" },
      { key: 2, value: "Europe" },
      { key: 3, value: "Asia" },
      { key: 4, value: "North America" },
      { key: 5, value: "South America" },
      { key: 6, value: "Australia" },
      { key: 7, value: "Antarctica" },
    ]);

    const modelRef = reactive({
      name: "",
      sub: {
        name: "",
      },
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: "Please input name",
          },
        ],
        "sub.name": [
          {
            required: true,
            message: "Please input sub name",
          },
        ],
      })
    );

    const onSubmit = () => {
      validate()
        .then((res) => {
          console.log(res, toRaw(modelRef));
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    const reset = () => {
      resetFields();
    };

    return {
      labelCol: {
        span: 24,
      },
      wrapperCol: {
        span: 24,
      },
      options,
      Continents,
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
};
</script>
<style scoped>
.wrap-content {
  width: 60%;
  margin: 0 auto;
}
</style>
