<template>
	<div class="order_preview">
		<div class="order_header">
			<i class="order_preview_back"></i>
			<span class="order_preview_title">提交订单</span>
		</div>
		<div class="order_section">
			<div class="order_inner_section">
				<div class="order_preview_head">
					<div class="order_preview_head_address"></div>
					<div class="order_preview_head_time"></div>
				</div>
			</div>
		</div>
		<div class="order_footer">
			<div class="order_footer_left">
				<span class="order_total">合计<i>¥<a>41</a></i></span>
			</div>
			<div class="order_footer_right">
				<button class="order_submit">
					<span>提交订单</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "orderPreview"
	}
</script>

<style lang="scss" scoped>
	.order_preview {
		margin: 0;
		padding: 0;
		font-size: 14px;
		color: #333;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		.order_header {
			z-index: 1000;
			height: 0.5rem;
			display: flex;
			justify-content: space-between;
			background-color: rgb(255, 255, 255);
			.order_preview_back {
				width: 0.4rem;
				background: url(../../assets/img/orderpreview/head-arrow-back.png) no-repeat;
				background-size: 20% 30%;
				background-position: center;
			}
			.order_preview_title {
				padding: 0.18rem 0;
				text-align: center;
				width: 100%;
			}
		}
		.order_section {
			flex: 1;
			overflow: auto;
			width: 100%;
			.order_inner_section{
				background-color: #F4F4F4;
				min-height: 40rem;
				padding: 0 0.1rem 0;
				.order_preview_head{
					background-color: #00f;
					
				}
			}
		}
		.order_footer {
			height: 0.5rem;
			background-color: #ceb;
			position: relative;
			font-size: 16px;
			.order_footer_left{
				float: left;
				width: 75%;
				position: absolute;
			    top: 0.17rem;
			    right: 0.15rem;
			    color: #333;
			    .order_total i{
					color: #FB4E44;
				    font-style: normal;
				    font-weight: bold;
				}
			}
			.order_footer_right{
				float: right;
				width: 25%;
				.order_submit{
					height: 0.5rem;
			    	width: 100%;
				    border-radius: 0;
				    background-color: #f8c74e;
				    font-weight: bold;
				    border: 0;
				    outline: 0;
				}
			}
		}
	}
</style>