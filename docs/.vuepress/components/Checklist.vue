<template>
    <div class="container">
        <div class="todo-wrapper">
            
            <div class="todo-content">
            <div class="todo-content-title">
                <h2>Your tasks</h2>
                <p class="task-report"><span class="task-remain">1</span> / 3 tasks</p>
            </div>
            <ul class="todo-list">
                <li class="task-item">
                <p class="text">Sprint meeting</p>
                </li>
                <li class="task-item">
                <p class="text">Have lunch with Bill Gates</p>
                </li>
                <li class="task-item">
                <p class="text">Export zip</p>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items','listID']
}
</script>

<style lang="scss" scoped>
    $base_font: 'Open Sans', sans-serif;
    $base_color: #ff3c41;
    $label_urgent_color: #ff3c41;
    $label_normal_color: #37EAA0;

    * { margin: 0; padding: 0 }

    html, body {
    min-height: 100%;
    height: 100%;
    }

    body {
    background: #f5f5f5;
    font-family: $base_font;
    font-size: 14px;
    }

    .clearfix {
    overflow: auto;
    zoom: 1;
    }

    .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    }

    .todo-wrapper {
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 0 40px rgba(0,0,0,.1);
    width: 300px;
    }
    
    .add-circle {
        position: absolute;
        background: $base_color;
        color: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        right: 20px;
        bottom: -20px;
        box-shadow: 0 0 13px rgb(255, 60, 65);
        cursor: pointer;
    }

    .todo-form {
    margin: 15px 0;
    width: 100%;
    input {
        width: 100%;
        border: 0;
        border-bottom: 1px solid #E6E6E6;
        font-family: inherit;
        padding: 5px 0;
        outline: none;
        &:focus {
        border-bottom-color: $base_color;
        }
    }
    }

    .todo-content {
    .todo-content-title {
        padding: 20px;
        h2 {
        font-size: 1.5em;
        font-weight: normal;
        color: #4C4646;
        }
        .task-report {
        font-size: 0.9em;
        color: #afafaf;
        }
    }
    }

    .todo-list {
    list-style: none;
    .task-item {
        padding: 15px 20px;
        border-top: 1px solid #f1f1f1;
        position: relative;
        &.task-done {
        .text {
            color: #ccc;
        }
        }
        .label {
        display: inline-block;
        background: $base_color;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
        &.normal {
            background: $label_normal_color;
        }
        }
        .text {
        position: relative;
        top: -2px;
        }
        /* Task actions */
        .task-action {
        position: absolute;
        right: 20px;
        top: 12px;
        z-index: 99999;
        .more {
            cursor: pointer;
            span {
            display: inline-block;
            margin: 0 1px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #D0D0D0;
            }
        }
        .action-list {
            position: absolute;
            right: 0px;
            top: 23px;
            border: 1px solid #ccc;
            list-style: none;
            padding: 15px 10px;
            border-radius: 4px;
            background: #fff;
            box-shadow: 0 4px 7px rgba(0,0,0,.1);
            display: none;
            li {
            padding: 3px 5px;
            cursor: pointer;
            white-space: nowrap;
            &:hover {
                background: #0ebeff;
                color: white;
                border-radius: 3px;
            }
            }
        }
        }
    }
    }

</style>