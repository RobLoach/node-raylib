#ifndef RAYLIB_STRUCTS
#define RAYLIB_STRUCTS

#include <emscripten/bind.h>
#include <raylib-cpp.hpp>

using namespace emscripten;

void raylib_structs() {
    value_object<Vector2>("Vector2")
        .field("x", &Vector2::x)
        .field("y", &Vector2::y)
    ;
    value_object<Vector3>("Vector3")
        .field("x", &Vector3::x)
        .field("y", &Vector3::y)
        .field("z", &Vector3::z)
    ;
    value_object<Vector4>("Vector4")
        .field("x", &Vector4::x)
        .field("y", &Vector4::y)
        .field("z", &Vector4::z)
        .field("w", &Vector4::w)
    ;
    value_object<Matrix>("Matrix")
        .field("m0", &Matrix::m0)
        .field("m1", &Matrix::m1)
        .field("m2", &Matrix::m2)
        .field("m3", &Matrix::m3)
        .field("m4", &Matrix::m4)
        .field("m5", &Matrix::m5)
        .field("m6", &Matrix::m6)
        .field("m7", &Matrix::m7)
        .field("m8", &Matrix::m8)
        .field("m9", &Matrix::m9)
        .field("m10", &Matrix::m10)
        .field("m11", &Matrix::m11)
        .field("m12", &Matrix::m12)
        .field("m13", &Matrix::m13)
        .field("m14", &Matrix::m14)
        .field("m15", &Matrix::m15)
    ;
    value_object<Color>("Color")
        .field("r", &Color::r)
        .field("g", &Color::g)
        .field("b", &Color::b)
        .field("a", &Color::a)
    ;
    value_object<Rectangle>("Rectangle")
        .field("x", &Rectangle::x)
        .field("y", &Rectangle::y)
        .field("width", &Rectangle::width)
        .field("height", &Rectangle::height)
    ;

    value_object<Image>("Image")
        .field("width", &Image::width)
        .field("height", &Image::height)
        .field("mipmaps", &Image::mipmaps)
        .field("format", &Image::format)
    ;
    value_object<Texture>("Texture")
        .field("id", &Texture::id)
        .field("width", &Texture::width)
        .field("height", &Texture::height)
        .field("mipmaps", &Texture::mipmaps)
        .field("format", &Texture::format)
    ;
    value_object<RenderTexture>("RenderTexture")
        .field("id", &RenderTexture::id)
        .field("texture", &RenderTexture::texture)
        .field("depth", &RenderTexture::depth)
    ;
    value_object<NPatchInfo>("NPatchInfo")
        .field("source", &NPatchInfo::source)
        .field("left", &NPatchInfo::left)
        .field("top", &NPatchInfo::top)
        .field("right", &NPatchInfo::right)
        .field("bottom", &NPatchInfo::bottom)
        .field("layout", &NPatchInfo::layout)
    ;
    value_object<Font>("Font")
        .field("baseSize", &Font::baseSize)
    ;
    value_object<Camera3D>("Camera3D")
        .field("position", &Camera3D::position)
        .field("target", &Camera3D::target)
        .field("up", &Camera3D::up)
        .field("fovy", &Camera3D::fovy)
        .field("projection", &Camera3D::projection)
    ;
    value_object<Camera2D>("Camera2D")
        .field("offset", &Camera2D::offset)
        .field("target", &Camera2D::target)
        .field("rotation", &Camera2D::rotation)
        .field("zoom", &Camera2D::zoom)
    ;/*
    value_object<Mesh>("Mesh")
        .field("vertexCount", &Mesh::vertexCount)
        .field("triangleCount", &Mesh::triangleCount)
        .field("vertices", &Mesh::vertices)
        .field("texcoords", &Mesh::texcoords)
        .field("texcoords2", &Mesh::texcoords2)
        .field("normals", &Mesh::normals)
        .field("tangents", &Mesh::tangents)
        .field("colors", &Mesh::colors)
        .field("indices", &Mesh::indices)
        .field("animVertices", &Mesh::animVertices)
        .field("animNormals", &Mesh::animNormals)
        .field("boneIds", &Mesh::boneIds)
        .field("boneWeights", &Mesh::boneWeights)
        .field("vaoId", &Mesh::vaoId)
        .field("vboId", &Mesh::vboId)
    ;
    value_object<Shader>("Shader")
        .field("id", &Shader::id)
        .field("locs", &Shader::locs)
    ;
    value_object<MaterialMap>("MaterialMap")
        .field("texture", &MaterialMap::texture)
        .field("color", &MaterialMap::color)
        .field("value", &MaterialMap::value)
    ;
    value_object<Material>("Material")
        .field("shader", &Material::shader)
        .field("maps", &Material::maps)
    ;
    value_object<Transform>("Transform")
        .field("translation", &Transform::translation)
        .field("rotation", &Transform::rotation)
        .field("scale", &Transform::scale)
    ;
    value_object<BoneInfo>("BoneInfo")
        .field("parent", &BoneInfo::parent)
    ;
    value_object<Model>("Model")
        .field("transform", &Model::transform)
        .field("meshCount", &Model::meshCount)
        .field("materialCount", &Model::materialCount)
        .field("meshes", &Model::meshes)
        .field("materials", &Model::materials)
        .field("meshMaterial", &Model::meshMaterial)
        .field("boneCount", &Model::boneCount)
        .field("bones", &Model::bones)
        .field("bindPose", &Model::bindPose)
    ;
    value_object<ModelAnimation>("ModelAnimation")
        .field("boneCount", &ModelAnimation::boneCount)
        .field("frameCount", &ModelAnimation::frameCount)
        .field("bones", &ModelAnimation::bones)
        .field("framePoses", &ModelAnimation::framePoses)
    ;
    value_object<Ray>("Ray")
        .field("position", &Ray::position)
        .field("direction", &Ray::direction)
    ;
    value_object<RayCollision>("RayCollision")
        .field("hit", &RayCollision::hit)
        .field("distance", &RayCollision::distance)
        .field("point", &RayCollision::point)
        .field("normal", &RayCollision::normal)
    ;
    value_object<BoundingBox>("BoundingBox")
        .field("min", &BoundingBox::min)
        .field("max", &BoundingBox::max)
    ;
    value_object<Wave>("Wave")
        .field("sampleRate", &Wave::sampleRate)
        .field("sampleSize", &Wave::sampleSize)
        .field("channels", &Wave::channels)
        .field("data", &Wave::data)
    ;
    value_object<AudioStream>("AudioStream")
        .field("buffer", &AudioStream::buffer)
        .field("sampleRate", &AudioStream::sampleRate)
        .field("sampleSize", &AudioStream::sampleSize)
        .field("channels", &AudioStream::channels)
    ;
    value_object<Sound>("Sound")
        .field("stream", &Sound::stream)
    ;
    value_object<Music>("Music")
        .field("stream", &Music::stream)
        .field("sampleCount", &Music::sampleCount)
        .field("looping", &Music::looping)
        .field("ctxType", &Music::ctxType)
        .field("ctxData", &Music::ctxData)
    ;
    value_object<VrDeviceInfo>("VrDeviceInfo")
        .field("hResolution", &VrDeviceInfo::hResolution)
        .field("vResolution", &VrDeviceInfo::vResolution)
        .field("hScreenSize", &VrDeviceInfo::hScreenSize)
        .field("vScreenSize", &VrDeviceInfo::vScreenSize)
        .field("vScreenCenter", &VrDeviceInfo::vScreenCenter)
        .field("eyeToScreenDistance", &VrDeviceInfo::eyeToScreenDistance)
        .field("lensSeparationDistance", &VrDeviceInfo::lensSeparationDistance)
        .field("interpupillaryDistance", &VrDeviceInfo::interpupillaryDistance)
    ;
    value_object<VrStereoConfig>("VrStereoConfig")
    ;
*/

}

#endif
