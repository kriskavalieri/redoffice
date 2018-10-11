<template>
    <vue-transmit class="col-12"
                    tag="section"
                    v-bind="transmitOptions"
                    upload-area-classes="bg-faded"
                    :url="uploadUrl"
                    ref="uploader">
        <div class="d-flex align-items-center justify-content-center w-100" style="height:20vh; border-radius: 1rem;">
            <button class="btn btn-primary" @click="triggerBrowse">Upload Files</button>
        </div>
        <template slot="files" slot-scope="props">
            <div class="row files-container p-3">
                <div v-for="file in props.files" :key="file.id" class="p-1 col-12">
                    <i slot="trigger" class="file-pending-icon ion ion-md-document"></i>
                    <div class='ext-name'>{{ file.name | extFilter }}</div>
                    <div class='file-info'>
                        <div class='file-name'>{{ file.name }}</div>
                        <div class='file-size'>{{ file.size|formatSize }}</div>
                        <i class='file-delete ion ion-ios-close-circle-outline' @click='deleteFile(file)'></i>
                    </div>
                </div>
            </div>
        </template>
    </vue-transmit>
</template>
<script>
const size = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
export default {
    name: 'redoffice-dragdrop-upload',
    props: ['uploadUrl', 'extraOptions'],
    data(){
        return {
            defaultOptions: {
                acceptedFileTypes: ['*'],
                clickable: false
            }
        }
    },
    computed: {
        transmitOptions(){
            return {
                ...this.defaultOptions,
                ...this.extraOptions || {}
            }
        }
    },
    methods: {
        triggerBrowse() {
            this.$refs.uploader.triggerBrowseFiles()
        },
        deleteFile(file){
            this.$refs.uploader.removeFile(file)
        }
    },
    filters: {
        extFilter(filename){
           let split = filename.split(".")
           return '.' + split[split.length - 1]
        },
        formatSize(fileSize){
            let factor = Math.floor((String(fileSize).length - 1) / 3 )
            fileSize = fileSize / Math.pow(1024, factor)
            fileSize = Math.floor(fileSize * Math.pow(10, 2)) / Math.pow(10, 2)
            return String(fileSize) + size[factor]
        }
    }
}
</script>
<style lang="scss">
.file-pending-icon{
    font-size: 4rem;
    z-index: 11;
    position: relative;
}
.ext-name{
    position: absolute;
    bottom: 11px;
    color: #fff;
    font-size: .7rem;
    font-weight: 900;
    font-family: Montserrat;
    text-indent: 2px;
    z-index: 12;
}
.file-info{
    background: #f9f9f9;
    height: 3rem;
    position: absolute;
    top: 12px;
    z-index: 10;
    padding: 3px 1rem 0 3rem;
    border-radius: 3px;
    border: 1px solid #cdcdcd;
    .file-name {
        color: #000;
    }
    .file-size {
        color: #919191;
    }
    .file-delete{
        position: absolute;
        top: -7px;
        border-radius: 50%;
        font-size: 1.5rem;
        padding-bottom: 0;
        margin-top: -5px;
        color: #b91912;
        background: #fff;
        height: 21px;
        width: 19px;
        cursor: pointer;
        right: -10px;
    }
}
</style>
