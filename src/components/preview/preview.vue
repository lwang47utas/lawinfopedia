<template>
  <!-- 预览的弹框 -->
  <el-dialog :visible.sync="pdfPreviewData.previewPdf" center>
    <div class="preview-head">
      <div class="preview-title">
        预览pdf文档
        <i class="el-icon-close" @click="callCloseOpenPdf"></i>
      </div>
      <div class="preview-download">
        <span>{{ this.pdfPreviewData.pdfTitle }}</span>
      </div>
    </div>
    <div class="preview-pdf">
      <iframe
        :src="pdfPreviewData.urlPdf + '#toolbar=1&view=FitH'"
        frameborder="0"
        class="preview-pdf-iframe"
      ></iframe>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    pdfPreviewData: Object
  },
  methods: {
    callCloseOpenPdf () {
      this.$emit('previewPdf')
    }
  }
}
</script>
<style lang='less'>
#menu13631,
#sun {
  .el-dialog {
    width: calc(80vw - 18.75rem) !important;
    height: 80vh;
    margin-top: 10vh !important;
    background: #fff;
    overflow: scroll;
    .el-dialog__header {
      padding: 0rem;
      .el-dialog__headerbtn {
        display: none;
      }
    }
    .el-dialog__body {
      padding: 0;
      height: 100%;
      .preview-head {
        position: sticky;
        top: 0rem;
        z-index: 100;
        .preview-title {
          position: relative;
          background-color: #126cdc;
          color: white;
          height: 2.5rem;
          line-height: 2.5rem;
          text-align: center;
          .el-icon-close {
            position: absolute;
            top: 0.625rem;
            right: 1.25rem;
            font-size: 1.25rem;
          }
        }
        .preview-download {
          height: 2.5rem;
          line-height: 2.5rem;
          background-color: #072631;
          border-bottom: 0.0625rem solid #606266;
          span {
            margin-left: 1.25rem;
            font-weight: bold;
          }
          button {
            width: 2.9375rem;
            height: 1.875rem;
            position: absolute;
            right: 1.25rem;
            top: 2.8125rem;
            background-color: #126cdc;
            border-radius: 0.0625rem;
            border: none;
            color: white;
          }
        }
      }
      .preview-pdf {
        width: 100%;
        height: calc(100% - 5.0625rem);
        .preview-pdf-iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
