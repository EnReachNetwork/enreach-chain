// Code generated by protoc-gen-go-pulsar. DO NOT EDIT.
package workload

import (
	fmt "fmt"
	runtime "github.com/cosmos/cosmos-proto/runtime"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoiface "google.golang.org/protobuf/runtime/protoiface"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	io "io"
	reflect "reflect"
	sync "sync"
)

var (
	md_Workload           protoreflect.MessageDescriptor
	fd_Workload_id        protoreflect.FieldDescriptor
	fd_Workload_epoch     protoreflect.FieldDescriptor
	fd_Workload_minerId   protoreflect.FieldDescriptor
	fd_Workload_score     protoreflect.FieldDescriptor
	fd_Workload_managerId protoreflect.FieldDescriptor
	fd_Workload_creator   protoreflect.FieldDescriptor
)

func init() {
	file_enreach_workload_workload_proto_init()
	md_Workload = File_enreach_workload_workload_proto.Messages().ByName("Workload")
	fd_Workload_id = md_Workload.Fields().ByName("id")
	fd_Workload_epoch = md_Workload.Fields().ByName("epoch")
	fd_Workload_minerId = md_Workload.Fields().ByName("minerId")
	fd_Workload_score = md_Workload.Fields().ByName("score")
	fd_Workload_managerId = md_Workload.Fields().ByName("managerId")
	fd_Workload_creator = md_Workload.Fields().ByName("creator")
}

var _ protoreflect.Message = (*fastReflection_Workload)(nil)

type fastReflection_Workload Workload

func (x *Workload) ProtoReflect() protoreflect.Message {
	return (*fastReflection_Workload)(x)
}

func (x *Workload) slowProtoReflect() protoreflect.Message {
	mi := &file_enreach_workload_workload_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_Workload_messageType fastReflection_Workload_messageType
var _ protoreflect.MessageType = fastReflection_Workload_messageType{}

type fastReflection_Workload_messageType struct{}

func (x fastReflection_Workload_messageType) Zero() protoreflect.Message {
	return (*fastReflection_Workload)(nil)
}
func (x fastReflection_Workload_messageType) New() protoreflect.Message {
	return new(fastReflection_Workload)
}
func (x fastReflection_Workload_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_Workload
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_Workload) Descriptor() protoreflect.MessageDescriptor {
	return md_Workload
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_Workload) Type() protoreflect.MessageType {
	return _fastReflection_Workload_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_Workload) New() protoreflect.Message {
	return new(fastReflection_Workload)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_Workload) Interface() protoreflect.ProtoMessage {
	return (*Workload)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_Workload) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.Id != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Id)
		if !f(fd_Workload_id, value) {
			return
		}
	}
	if x.Epoch != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Epoch)
		if !f(fd_Workload_epoch, value) {
			return
		}
	}
	if x.MinerId != "" {
		value := protoreflect.ValueOfString(x.MinerId)
		if !f(fd_Workload_minerId, value) {
			return
		}
	}
	if x.Score != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Score)
		if !f(fd_Workload_score, value) {
			return
		}
	}
	if x.ManagerId != "" {
		value := protoreflect.ValueOfString(x.ManagerId)
		if !f(fd_Workload_managerId, value) {
			return
		}
	}
	if x.Creator != "" {
		value := protoreflect.ValueOfString(x.Creator)
		if !f(fd_Workload_creator, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_Workload) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "enreach.workload.Workload.id":
		return x.Id != uint64(0)
	case "enreach.workload.Workload.epoch":
		return x.Epoch != uint64(0)
	case "enreach.workload.Workload.minerId":
		return x.MinerId != ""
	case "enreach.workload.Workload.score":
		return x.Score != uint64(0)
	case "enreach.workload.Workload.managerId":
		return x.ManagerId != ""
	case "enreach.workload.Workload.creator":
		return x.Creator != ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.workload.Workload"))
		}
		panic(fmt.Errorf("message enreach.workload.Workload does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Workload) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "enreach.workload.Workload.id":
		x.Id = uint64(0)
	case "enreach.workload.Workload.epoch":
		x.Epoch = uint64(0)
	case "enreach.workload.Workload.minerId":
		x.MinerId = ""
	case "enreach.workload.Workload.score":
		x.Score = uint64(0)
	case "enreach.workload.Workload.managerId":
		x.ManagerId = ""
	case "enreach.workload.Workload.creator":
		x.Creator = ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.workload.Workload"))
		}
		panic(fmt.Errorf("message enreach.workload.Workload does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_Workload) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "enreach.workload.Workload.id":
		value := x.Id
		return protoreflect.ValueOfUint64(value)
	case "enreach.workload.Workload.epoch":
		value := x.Epoch
		return protoreflect.ValueOfUint64(value)
	case "enreach.workload.Workload.minerId":
		value := x.MinerId
		return protoreflect.ValueOfString(value)
	case "enreach.workload.Workload.score":
		value := x.Score
		return protoreflect.ValueOfUint64(value)
	case "enreach.workload.Workload.managerId":
		value := x.ManagerId
		return protoreflect.ValueOfString(value)
	case "enreach.workload.Workload.creator":
		value := x.Creator
		return protoreflect.ValueOfString(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.workload.Workload"))
		}
		panic(fmt.Errorf("message enreach.workload.Workload does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Workload) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "enreach.workload.Workload.id":
		x.Id = value.Uint()
	case "enreach.workload.Workload.epoch":
		x.Epoch = value.Uint()
	case "enreach.workload.Workload.minerId":
		x.MinerId = value.Interface().(string)
	case "enreach.workload.Workload.score":
		x.Score = value.Uint()
	case "enreach.workload.Workload.managerId":
		x.ManagerId = value.Interface().(string)
	case "enreach.workload.Workload.creator":
		x.Creator = value.Interface().(string)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.workload.Workload"))
		}
		panic(fmt.Errorf("message enreach.workload.Workload does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Workload) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "enreach.workload.Workload.id":
		panic(fmt.Errorf("field id of message enreach.workload.Workload is not mutable"))
	case "enreach.workload.Workload.epoch":
		panic(fmt.Errorf("field epoch of message enreach.workload.Workload is not mutable"))
	case "enreach.workload.Workload.minerId":
		panic(fmt.Errorf("field minerId of message enreach.workload.Workload is not mutable"))
	case "enreach.workload.Workload.score":
		panic(fmt.Errorf("field score of message enreach.workload.Workload is not mutable"))
	case "enreach.workload.Workload.managerId":
		panic(fmt.Errorf("field managerId of message enreach.workload.Workload is not mutable"))
	case "enreach.workload.Workload.creator":
		panic(fmt.Errorf("field creator of message enreach.workload.Workload is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.workload.Workload"))
		}
		panic(fmt.Errorf("message enreach.workload.Workload does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_Workload) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "enreach.workload.Workload.id":
		return protoreflect.ValueOfUint64(uint64(0))
	case "enreach.workload.Workload.epoch":
		return protoreflect.ValueOfUint64(uint64(0))
	case "enreach.workload.Workload.minerId":
		return protoreflect.ValueOfString("")
	case "enreach.workload.Workload.score":
		return protoreflect.ValueOfUint64(uint64(0))
	case "enreach.workload.Workload.managerId":
		return protoreflect.ValueOfString("")
	case "enreach.workload.Workload.creator":
		return protoreflect.ValueOfString("")
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: enreach.workload.Workload"))
		}
		panic(fmt.Errorf("message enreach.workload.Workload does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_Workload) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in enreach.workload.Workload", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_Workload) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Workload) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_Workload) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_Workload) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*Workload)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		if x.Id != 0 {
			n += 1 + runtime.Sov(uint64(x.Id))
		}
		if x.Epoch != 0 {
			n += 1 + runtime.Sov(uint64(x.Epoch))
		}
		l = len(x.MinerId)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.Score != 0 {
			n += 1 + runtime.Sov(uint64(x.Score))
		}
		l = len(x.ManagerId)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		l = len(x.Creator)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*Workload)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if len(x.Creator) > 0 {
			i -= len(x.Creator)
			copy(dAtA[i:], x.Creator)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Creator)))
			i--
			dAtA[i] = 0x32
		}
		if len(x.ManagerId) > 0 {
			i -= len(x.ManagerId)
			copy(dAtA[i:], x.ManagerId)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.ManagerId)))
			i--
			dAtA[i] = 0x2a
		}
		if x.Score != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Score))
			i--
			dAtA[i] = 0x20
		}
		if len(x.MinerId) > 0 {
			i -= len(x.MinerId)
			copy(dAtA[i:], x.MinerId)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.MinerId)))
			i--
			dAtA[i] = 0x1a
		}
		if x.Epoch != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Epoch))
			i--
			dAtA[i] = 0x10
		}
		if x.Id != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Id))
			i--
			dAtA[i] = 0x8
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*Workload)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Workload: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Workload: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
				}
				x.Id = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Id |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 2:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Epoch", wireType)
				}
				x.Epoch = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Epoch |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 3:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field MinerId", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.MinerId = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 4:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Score", wireType)
				}
				x.Score = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Score |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 5:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field ManagerId", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.ManagerId = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 6:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Creator = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.0
// 	protoc        (unknown)
// source: enreach/workload/workload.proto

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Workload struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Epoch     uint64 `protobuf:"varint,2,opt,name=epoch,proto3" json:"epoch,omitempty"`
	MinerId   string `protobuf:"bytes,3,opt,name=minerId,proto3" json:"minerId,omitempty"`
	Score     uint64 `protobuf:"varint,4,opt,name=score,proto3" json:"score,omitempty"`
	ManagerId string `protobuf:"bytes,5,opt,name=managerId,proto3" json:"managerId,omitempty"`
	Creator   string `protobuf:"bytes,6,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (x *Workload) Reset() {
	*x = Workload{}
	if protoimpl.UnsafeEnabled {
		mi := &file_enreach_workload_workload_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Workload) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Workload) ProtoMessage() {}

// Deprecated: Use Workload.ProtoReflect.Descriptor instead.
func (*Workload) Descriptor() ([]byte, []int) {
	return file_enreach_workload_workload_proto_rawDescGZIP(), []int{0}
}

func (x *Workload) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Workload) GetEpoch() uint64 {
	if x != nil {
		return x.Epoch
	}
	return 0
}

func (x *Workload) GetMinerId() string {
	if x != nil {
		return x.MinerId
	}
	return ""
}

func (x *Workload) GetScore() uint64 {
	if x != nil {
		return x.Score
	}
	return 0
}

func (x *Workload) GetManagerId() string {
	if x != nil {
		return x.ManagerId
	}
	return ""
}

func (x *Workload) GetCreator() string {
	if x != nil {
		return x.Creator
	}
	return ""
}

var File_enreach_workload_workload_proto protoreflect.FileDescriptor

var file_enreach_workload_workload_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x65, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2f, 0x77, 0x6f, 0x72, 0x6b, 0x6c, 0x6f,
	0x61, 0x64, 0x2f, 0x77, 0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x10, 0x65, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2e, 0x77, 0x6f, 0x72, 0x6b, 0x6c,
	0x6f, 0x61, 0x64, 0x22, 0x98, 0x01, 0x0a, 0x08, 0x57, 0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61, 0x64,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x14, 0x0a, 0x05, 0x65, 0x70, 0x6f, 0x63, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x05, 0x65, 0x70, 0x6f, 0x63, 0x68, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x69, 0x6e, 0x65, 0x72, 0x49,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x69, 0x6e, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x14, 0x0a, 0x05, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x05, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65,
	0x72, 0x49, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6d, 0x61, 0x6e, 0x61, 0x67,
	0x65, 0x72, 0x49, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x42, 0xa9,
	0x01, 0x0a, 0x14, 0x63, 0x6f, 0x6d, 0x2e, 0x65, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2e, 0x77,
	0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61, 0x64, 0x42, 0x0d, 0x57, 0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61,
	0x64, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x21, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73,
	0x73, 0x64, 0x6b, 0x2e, 0x69, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x65, 0x6e, 0x72, 0x65, 0x61,
	0x63, 0x68, 0x2f, 0x77, 0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61, 0x64, 0xa2, 0x02, 0x03, 0x45, 0x57,
	0x58, 0xaa, 0x02, 0x10, 0x45, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x2e, 0x57, 0x6f, 0x72, 0x6b,
	0x6c, 0x6f, 0x61, 0x64, 0xca, 0x02, 0x10, 0x45, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68, 0x5c, 0x57,
	0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61, 0x64, 0xe2, 0x02, 0x1c, 0x45, 0x6e, 0x72, 0x65, 0x61, 0x63,
	0x68, 0x5c, 0x57, 0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61, 0x64, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x11, 0x45, 0x6e, 0x72, 0x65, 0x61, 0x63, 0x68,
	0x3a, 0x3a, 0x57, 0x6f, 0x72, 0x6b, 0x6c, 0x6f, 0x61, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_enreach_workload_workload_proto_rawDescOnce sync.Once
	file_enreach_workload_workload_proto_rawDescData = file_enreach_workload_workload_proto_rawDesc
)

func file_enreach_workload_workload_proto_rawDescGZIP() []byte {
	file_enreach_workload_workload_proto_rawDescOnce.Do(func() {
		file_enreach_workload_workload_proto_rawDescData = protoimpl.X.CompressGZIP(file_enreach_workload_workload_proto_rawDescData)
	})
	return file_enreach_workload_workload_proto_rawDescData
}

var file_enreach_workload_workload_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_enreach_workload_workload_proto_goTypes = []interface{}{
	(*Workload)(nil), // 0: enreach.workload.Workload
}
var file_enreach_workload_workload_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_enreach_workload_workload_proto_init() }
func file_enreach_workload_workload_proto_init() {
	if File_enreach_workload_workload_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_enreach_workload_workload_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Workload); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_enreach_workload_workload_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_enreach_workload_workload_proto_goTypes,
		DependencyIndexes: file_enreach_workload_workload_proto_depIdxs,
		MessageInfos:      file_enreach_workload_workload_proto_msgTypes,
	}.Build()
	File_enreach_workload_workload_proto = out.File
	file_enreach_workload_workload_proto_rawDesc = nil
	file_enreach_workload_workload_proto_goTypes = nil
	file_enreach_workload_workload_proto_depIdxs = nil
}
